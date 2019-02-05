using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Authorization;

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
        public async Task<IActionResult> AddHallsAsync(UpsertHallsRequest addHallsRequest)
        {
            List<HallModel> halls = addHallsRequest.Halls.GetHallModelList();

            List<SeatModel> seats = addHallsRequest.Seats.GetSeatModelList();

            UpsertItemResultStatus resultStatus = await _hallService.UpsertHallsAsync(
                new CinemaHallsModel(
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

        [HttpPut("{Id:int}")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditHallsAsync(UpsertHallsRequest editHallsRequest)
        {
            List<HallModel> halls = editHallsRequest.Halls.GetHallModelList();

            List<SeatModel> seats = editHallsRequest.Seats.GetSeatModelList();

            UpsertItemResultStatus resultStatus = await _hallService.UpsertHallsAsync(
                new CinemaHallsModel(
                    halls,
                    seats,
                    editHallsRequest.CinemaId
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

            return Ok(result.GetOptionsResponseArray());
        }
    }
}
