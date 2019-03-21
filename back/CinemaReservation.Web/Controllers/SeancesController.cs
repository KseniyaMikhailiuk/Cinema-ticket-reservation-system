using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Mapster;
using System;
using CinemaReservation.BusinessLayer.Exceptions;

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
            try
            {
                IReadOnlyCollection<ServicePriceModel> services = request.Services.Adapt<IReadOnlyCollection<ServicePriceModel>>();

                IReadOnlyCollection<SeatPriceModel> seatPrices = request.SeatPrices.Adapt<IReadOnlyCollection<SeatPriceModel>>();

                SeanceModel seanceModel = new SeanceModel(
                    request.Id,
                    request.DateTime,
                    request.FilmId,
                    request.HallId,
                    services,
                    seatPrices
                );

                await _seanceService.UpsertSeanceAsync(seanceModel);

                return NoContent();
            }
            catch (ConflictException e)
            {
                return Conflict(e.Message);
            }
        }

        [HttpPut("{Id:int}")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditSeanceAsync(UpsertSeanceRequest request)
        {
            if (!await _seanceService.CheckId(request.Id))
            {
                return BadRequest();
            }

            try
            {
                IReadOnlyCollection<ServicePriceModel> services = request.Services.Adapt<IReadOnlyCollection<ServicePriceModel>>();

                IReadOnlyCollection<SeatPriceModel> seatPrices = request.SeatPrices.Adapt<IReadOnlyCollection<SeatPriceModel>>();

                SeanceModel seanceModel = new SeanceModel(
                    request.Id,
                    request.DateTime,
                    request.FilmId,
                    request.HallId,
                    services,
                    seatPrices
                );

                await _seanceService.UpsertSeanceAsync(seanceModel);

                return NoContent();
            }
            catch (Exception e)
            {
                return Conflict(e.Message);
            }
        }

    }
}
