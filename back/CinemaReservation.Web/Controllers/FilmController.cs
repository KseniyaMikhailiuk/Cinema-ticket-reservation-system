using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilmController : Controller
    {
        private IFilmService _filmService;

        public FilmController(
            IFilmService filmService
        )
        {
            _filmService = filmService;
        }

        [HttpPost("addfilm")]
        public async Task<IActionResult> AddFilmAsync(UpsertFilmRequest upsertFilmRequest)
        {
            FilmModel filmModel = new FilmModel(
                upsertFilmRequest.Title,
                upsertFilmRequest.Release,
                upsertFilmRequest.Description,
                upsertFilmRequest.StartShowingDate,
                upsertFilmRequest.FinishShowingDate
            );

            UpsertItemResultStatusAndId result = await _filmService.AddFilmAsync(filmModel);

            if (result.UpsertItemResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(result.Id);
            }

            return Conflict("conflict");
        }

        [HttpPost("addposter")]
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
    }
}
