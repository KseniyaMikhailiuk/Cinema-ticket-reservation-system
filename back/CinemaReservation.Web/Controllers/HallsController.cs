using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HallsController : Controller
    {
        private IHallService _hallService;

        public HallsController(
            IHallService hallService
        )
        {
            _hallService = hallService;
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

            UpsertItemResultStatus resultStatus = await _hallService.AddHallsAsync(
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

            UpsertItemResultStatus resultStatus = await _hallService.EditHallsAsync(
                new HallsModel(
                    halls,
                    seats,
                    addHallsRequest.CinemaId
                )
            );

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("Halls are modified");
            }

            return Conflict("Hall exists");
        }

        [HttpGet("getHallsOptions")]
        public async Task<IActionResult> GetCinemaFilterOptionsAsync()
        {
            List<FilterOptionModel> result = await _hallService.GetHallsOptionsAsync();

            return Ok(ModelTransformationHelper.ModelListToResponseList(result).ToArray());
        }
    }
}
