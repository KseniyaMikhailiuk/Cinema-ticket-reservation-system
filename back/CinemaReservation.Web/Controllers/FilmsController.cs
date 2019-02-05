using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

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
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddFilmAsync(UpsertFilmRequest addFilmRequest)
        {
            FilmModel filmModel = new FilmModel(
                addFilmRequest.Id,
                addFilmRequest.Title,
                addFilmRequest.Release,
                addFilmRequest.Description,
                addFilmRequest.StartShowingDate,
                addFilmRequest.FinishShowingDate,
                new TimeSpan(
                    addFilmRequest.FilmDuration.Hours,
                    addFilmRequest.FilmDuration.Minutes,
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
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> EditFilmAsync(UpsertFilmRequest editFilmRequest)
        {
            FilmModel filmModel = new FilmModel(
                editFilmRequest.Id,
                editFilmRequest.Title,
                editFilmRequest.Release,
                editFilmRequest.Description,
                editFilmRequest.StartShowingDate,
                editFilmRequest.FinishShowingDate,
                new TimeSpan(
                    editFilmRequest.FilmDuration.Hours,
                    editFilmRequest.FilmDuration.Minutes,
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
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddPosterAsync(IFormCollection addPosterRequest)
        {
            int filmId = int.Parse(addPosterRequest["FilmId"]);
            IFormFile formFile = addPosterRequest.Files.GetFile("FilmPoster");

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
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetFilmOptionsAsync()
        {
            List<OptionModel> result = await _filmService.GetFilmOptionsAsync();

            return Ok(result.GetOptionsResponseArray());
        }
    }
}
