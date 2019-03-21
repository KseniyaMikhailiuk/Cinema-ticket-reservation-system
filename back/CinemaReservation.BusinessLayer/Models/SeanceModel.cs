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
        public IReadOnlyCollection<ServicePriceModel> Services { get; }
        public IReadOnlyCollection<SeatPriceModel> SeatPrices { get; }

        public SeanceModel(
            int id,
            DateTime dateTime,
            int filmId,
            int hallId,
            IReadOnlyCollection<ServicePriceModel> services,
            IReadOnlyCollection<SeatPriceModel> seatPrices
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
