﻿using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Mapster;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/films")]
    [ApiController]
    public class FilmsController : Controller
    {
        private IFilmService _filmService;

        public FilmsController(
            IFilmService filmService
        )
        {
            _filmService = filmService;
        }

        [HttpPost]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> AddFilmAsync(UpsertFilmRequest request)
        {
            if (request.FinishShowingDate < request.StartShowingDate)
            {
                return BadRequest();
            }

            FilmModel filmModel = new FilmModel(
                request.Id,
                request.Title,
                null,
                request.Release,
                request.Description,
                request.StartShowingDate,
                request.FinishShowingDate,
                new TimeSpan(
                    request.FilmDuration.Hours,
                    request.FilmDuration.Minutes,
                    0
                )
            );

            int result = await _filmService.UpsertFilmAsync(filmModel);

            return Ok(result);
        }

        [HttpPut("{Id:int}")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditFilmAsync(UpsertFilmRequest request)
        {
            if (!await _filmService.CheckId(request.Id))
            {
                return BadRequest();
            }

            if (request.FinishShowingDate < request.StartShowingDate)
            {
                return BadRequest();
            }

            FilmModel filmModel = new FilmModel(
                request.Id,
                request.Title,
                null,
                request.Release,
                request.Description,
                request.StartShowingDate,
                request.FinishShowingDate,
                new TimeSpan(
                    request.FilmDuration.Hours,
                    request.FilmDuration.Minutes,
                    0
                )
            );

            int result = await _filmService.UpsertFilmAsync(filmModel);

            return Ok(result);
        }

        [HttpPut("{FilmId:int}/poster")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> AddPosterAsync(IFormCollection request)
        {
            int filmId = int.Parse(request["FilmId"]);
            IFormFile formFile = request.Files.GetFile("FilmPoster");

            await _filmService.InsertFilmPosterAsync(new FilmPosterModel(
                filmId,
                formFile
            ));

            return NoContent();
        }

        [HttpPost("filtered")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> GetFilmsAsync(GetFilmNamesRequest request)
        {
            IReadOnlyCollection<FilmModel> result = await _filmService.GetFilmsAsync(request.Filter);

            return Ok(result.Adapt<FilmModel[]>());
        }
    }
}
