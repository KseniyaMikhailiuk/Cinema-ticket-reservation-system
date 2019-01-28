using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
    public class SeanceController : Controller
    {
        private ISeanceService _seanceService;

        public SeanceController(
            ISeanceService seanceService
        )
        {
            _seanceService = seanceService;
        }

        public async Task<IActionResult> AddSeance(AddSeanceRequest addSeanceRequest)
        {
            List<ServiceModel> services = new List<ServiceModel>();

            foreach(Service service in addSeanceRequest.Services)
            {
                services.Add(new ServiceModel(
                    service.Id,
                    service.Price
                ));
            }

            List<SeatPriceModel> seatPrices = new List<SeatPriceModel>();

            foreach (SeatPrice seatPrice in addSeanceRequest.SeatPrices)
            {
                seatPrices.Add(new SeatPriceModel(
                    seatPrice.Price,
                    seatPrice.SeatTypeId
                ));
            }

            SeanceModel seanceModel = new SeanceModel(
                addSeanceRequest.DateTime,
                addSeanceRequest.FilmId,
                addSeanceRequest.HallId,
                services,
                seatPrices
            );
        }
    }
}
