using System;

namespace CinemaReservation.Web.Models
{
    public class UpsertSeanceRequest
    {
        public int Id { get; }
        public DateTime DateTime { get; }
        public int FilmId { get; }
        public int HallId { get; }
        public PriceItem[] Services { get; }
        public PriceItem[] SeatPrices { get; }

        public UpsertSeanceRequest(
            int id,
            DateTime dateTime,
            int filmId,
            int hallId,
            PriceItem[] services,
            PriceItem[] seatPrices
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
