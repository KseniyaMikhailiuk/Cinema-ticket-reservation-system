using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

            if (cinemaResultModel.AddCinemaResultStatus == AddCinemaResultStatus.Ok)
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

            if (cinemaResultModel.AddCinemaResultStatus == AddCinemaResultStatus.Ok)
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

            await _adminPageService.AddHallsAsync(
                new HallsModel(
                    halls,
                    seats,
                    addHallsRequest.CinemaId
                )
            );

            return Conflict("Cinema exists");
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

            await _adminPageService.EditHallsAsync(
                new HallsModel(
                    halls,
                    seats,
                    addHallsRequest.CinemaId
                )
            );

            return Conflict("Cinema exists");
        }

    }
}
