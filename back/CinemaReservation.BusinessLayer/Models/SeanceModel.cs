using System;
using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Models
{
    public class SeanceModel
    {
        public DateTime DateTime { get; }
        public int FilmId { get; }
        public int HallId { get; }
        public List<PriceModel> Services { get; }
        public List<PriceModel> SeatPrices { get; }

        public SeanceModel(
            DateTime dateTime,
            int filmId,
            int hallId,
            List<PriceModel> services,
            List<PriceModel> seatPrices
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
