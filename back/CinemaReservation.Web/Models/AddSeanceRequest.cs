using System;

namespace CinemaReservation.Web.Models
{
    public class AddSeanceRequest
    {
        public DateTime DateTime { get; }
        public int FilmId { get; }
        public int HallId { get; }
        public PriceItem[] Services { get; }
        public PriceItem[] SeatPrices { get; }

        public AddSeanceRequest(
            DateTime dateTime,
            int filmId,
            int hallId,
            PriceItem[] services,
            PriceItem[] seatPrices
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
