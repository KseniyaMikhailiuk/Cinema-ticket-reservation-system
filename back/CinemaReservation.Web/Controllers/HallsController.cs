using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Mapster;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/halls")]
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

        [HttpPost]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> AddHallsAsync(UpsertHallsRequest request)
        {
            List<HallModel> halls = request.Halls.Adapt<List<HallModel>>();

            List<SeatModel> seats = request.Seats.Adapt<List<SeatModel>>();

            UpsertItemResultStatus resultStatus = await _hallService.UpsertHallsAsync(
                new CinemaHallsModel(
                    halls,
                    seats,
                    request.CinemaId
                )
            );

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("Halls are added");
            }

            return Conflict("Hall exists");
        }

        [HttpPut("{Id:int}")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditHallsAsync(UpsertHallsRequest request)
        {
            List<HallModel> halls = request.Halls.Adapt<List<HallModel>>();

            List<SeatModel> seats = request.Seats.Adapt<List<SeatModel>>();

            UpsertItemResultStatus resultStatus = await _hallService.UpsertHallsAsync(
                new CinemaHallsModel(
                    halls,
                    seats,
                    request.CinemaId
                )
            );

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("Halls are modified");
            }

            return Conflict("Hall exists");
        }

        [HttpGet]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> GetHallOptionsAsync()
        {
            List<OptionModel> result = await _hallService.GetHallsOptionsAsync();

            return Ok(result.Adapt<OptionItem[]>());
        }
    }
}
