using System;
using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Models
{
    public class SeanceModel
    {
        public DateTime DateTime { get; }
        public int FilmId { get; }
        public int HallId { get; }
        public List<ServiceModel> Services { get; }
        public List<SeatPriceModel> SeatPrices { get; }

        public SeanceModel(
            DateTime dateTime,
            int filmId,
            int hallId,
            List<ServiceModel> services,
            List<SeatPriceModel> seatPrices
        )
        {
            DateTime = dateTime;
            FilmId = filmId;
            HallId = hallId;
            Services = services;
            SeatPrices = seatPrices;
        }
    }
}
