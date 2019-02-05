using System;
using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Models
{
    public class SeanceModel
    {
        public int Id { get; }
        public DateTime DateTime { get; }
        public int FilmId { get; }
        public int HallId { get; }
        public List<ServicePriceModel> Services { get; }
        public List<SeatPriceModel> SeatPrices { get; }

        public SeanceModel(
            int id,
            DateTime dateTime,
            int filmId,
            int hallId,
            List<ServicePriceModel> services,
            List<SeatPriceModel> seatPrices
        )
        {
            Id = id;
            DateTime = dateTime;
            FilmId = filmId;
            HallId = hallId;
            Services = services;
            SeatPrices = seatPrices;
        }
    }
}
