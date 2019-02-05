using System.Threading.Tasks;
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
            FilmModel filmModel = new FilmModel(
                request.Id,
                request.Title,
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

            UpsertItemResultStatusAndId result = await _filmService.UpsertFilmAsync(filmModel);

            if (result.UpsertItemResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(result.Id);
            }

            return Conflict("conflict");
        }

        [HttpPut("{Id:int}")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditFilmAsync(UpsertFilmRequest request)
        {
            FilmModel filmModel = new FilmModel(
                request.Id,
                request.Title,
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

            UpsertItemResultStatusAndId result = await _filmService.UpsertFilmAsync(filmModel);

            if (result.UpsertItemResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(result.Id);
            }

            return Conflict("conflict");
        }

        [HttpPut("{FilmId:int}/poster")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> AddPosterAsync(IFormCollection request)
        {
            int filmId = int.Parse(request["FilmId"]);
            IFormFile formFile = request.Files.GetFile("FilmPoster");

            UpsertItemResultStatus resultStatus = await _filmService.AddFilmPosterAsync(new FilmPosterModel(
                filmId,
                formFile
            ));

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("Film added");
            }

            return BadRequest("Error");
        }

        [HttpGet]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> GetFilmOptionsAsync()
        {
            List<OptionModel> result = await _filmService.GetFilmOptionsAsync();

            return Ok(result.Adapt<OptionItem[]>());
        }
    }
}
