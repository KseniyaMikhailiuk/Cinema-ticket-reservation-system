using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
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
        public async Task<IActionResult> AddSeanceAsync(UpsertSeanceRequest addSeanceRequest)
        {
            List<PriceModel> services = addSeanceRequest.Services.GetPriceModelList();

            List<PriceModel> seatPrices = addSeanceRequest.SeatPrices.GetPriceModelList();

            SeanceModel seanceModel = new SeanceModel(
                addSeanceRequest.Id,
                addSeanceRequest.DateTime,
                addSeanceRequest.FilmId,
                addSeanceRequest.HallId,
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
        public async Task<IActionResult> EditSeanceAsync(UpsertSeanceRequest addSeanceRequest)
        {
            List<PriceModel> services = addSeanceRequest.Services.GetPriceModelList();

            List<PriceModel> seatPrices = addSeanceRequest.SeatPrices.GetPriceModelList();

            SeanceModel seanceModel = new SeanceModel(
                addSeanceRequest.Id,
                addSeanceRequest.DateTime,
                addSeanceRequest.FilmId,
                addSeanceRequest.HallId,
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
