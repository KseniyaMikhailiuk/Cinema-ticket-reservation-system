using System;

namespace CinemaReservation.Web.Models
{
    public class AddSeanceRequest
    {
        public DateTime DateTime { get; }
        public int FilmId { get; }
        public int HallId { get; }
        public Service[] Services { get; }
        public SeatPrice[] SeatPrices { get; }

        public AddSeanceRequest(
            DateTime dateTime,
            int filmId,
            int hallId,
            Service[] services,
            SeatPrice[] seatPrices
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
