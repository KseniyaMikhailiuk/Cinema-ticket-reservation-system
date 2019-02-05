using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Mapster;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/seances")]
    [ApiController]
    public class SeancesController : Controller
    {
        private ISeanceService _seanceService;

        public SeancesController(
            ISeanceService seanceService
        )
        {
            _seanceService = seanceService;
        }

        [HttpPost]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> AddSeanceAsync(UpsertSeanceRequest request)
        {
            List<ServicePriceModel> services = request.Services.Adapt<List<ServicePriceModel>>();

            List<SeatPriceModel> seatPrices = request.SeatPrices.Adapt<List<SeatPriceModel>>();

            SeanceModel seanceModel = new SeanceModel(
                request.Id,
                request.DateTime,
                request.FilmId,
                request.HallId,
                services,
                seatPrices
            );

            UpsertItemResultStatus resultStatus = await _seanceService.UpsertSeanceAsync(seanceModel);

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("Seance added successfully");
            }

            return Conflict("Seance at this time exists");
        }

        [HttpPut("{Id:int}")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditSeanceAsync(UpsertSeanceRequest request)
        {
            List<ServicePriceModel> services = request.Services.Adapt<List<ServicePriceModel>>();

            List<SeatPriceModel> seatPrices = request.SeatPrices.Adapt<List<SeatPriceModel>>();

            SeanceModel seanceModel = new SeanceModel(
                request.Id,
                request.DateTime,
                request.FilmId,
                request.HallId,
                services,
                seatPrices
            );

            UpsertItemResultStatus resultStatus = await _seanceService.UpsertSeanceAsync(seanceModel);

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("Seance added successfully");
            }

            return Conflict("Seance at this time exists");
        }

    }
}
