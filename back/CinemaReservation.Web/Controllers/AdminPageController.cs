using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminPageController : Controller
    {
        private IAdminPageService _adminPageService;

        public AdminPageController(
            IAdminPageService adminPageService
        )
        {
            _adminPageService = adminPageService;
        }

        [HttpPost("addcinema")]
        public async Task<IActionResult> AddCinemaAsync(UpsertCinemaRequest addCinemaRequest)
        {
            CinemaResultModel cinemaResultModel = await _adminPageService.AddCinemaAsync(
                new CinemaModel(
                    addCinemaRequest.Name,
                    addCinemaRequest.City
                )
            );

            if (cinemaResultModel.UpsertCinemaResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(
                    cinemaResultModel.Id
                );
            }

            return Conflict("Cinema exists");
        }

        [HttpPut("editcinema")]
        public async Task<IActionResult> EditCinemaAsync(UpsertCinemaRequest editCinemaRequest)
        {
            CinemaResultModel cinemaResultModel = await _adminPageService.EditCinemaAsync(
                new CinemaModel(
                    editCinemaRequest.Id,
                    editCinemaRequest.Name,
                    editCinemaRequest.City
                )
            );

            if (cinemaResultModel.UpsertCinemaResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(
                    cinemaResultModel.Id
                );
            }

            return Conflict("Cinema exists");
        }

        [HttpPost("addhalls")]
        public async Task<IActionResult> AddHallsAsync(UpsertHallsRequest addHallsRequest)
        {
            List<HallModel> halls = new List<HallModel>();

            foreach (Hall hall in addHallsRequest.Halls)
            {
                halls.Add(new HallModel(
                    hall.Name,
                    hall.Id
                ));
            }

            List<SeatModel> seats = new List<SeatModel>();

            foreach (Seat seat in addHallsRequest.Seats)
            {
                seats.Add(new SeatModel(
                    seat.Type,
                    seat.Raw,
                    seat.Line,
                    seat.HallId
                ));
            }

            UpsertItemResultStatus resultStatus = await _adminPageService.AddHallsAsync(
                new HallsModel(
                    halls,
                    seats,
                    addHallsRequest.CinemaId
                )
            );

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("Halls are added");
            }

            return Conflict("Hall exists");
        }

        [HttpPut("edithalls")]
        public async Task<IActionResult> EditHallsAsync(UpsertHallsRequest addHallsRequest)
        {

            List<HallModel> halls = new List<HallModel>();

            foreach (Hall hall in addHallsRequest.Halls)
            {
                halls.Add(new HallModel(
                    hall.Name,
                    hall.Id
                ));
            }

            List<SeatModel> seats = new List<SeatModel>();

            foreach (Seat seat in addHallsRequest.Seats)
            {
                seats.Add(new SeatModel(
                    seat.Type,
                    seat.Raw,
                    seat.Line,
                    seat.HallId
                ));
            }

            UpsertItemResultStatus resultStatus = await _adminPageService.EditHallsAsync(
                new HallsModel(
                    halls,
                    seats,
                    addHallsRequest.CinemaId
                )
            );

            if(resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("Halls are modified");
            }

            return Conflict("Hall exists");
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

            FilmResultModel result = await _adminPageService.AddFilmAsync(filmModel);

            if (result.UpsertFilmResultStatus == UpsertItemResultStatus.Ok)
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

            UpsertItemResultStatus resultStatus = await _adminPageService.AddFilmPosterAsync(new ImageModel(
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
