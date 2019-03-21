using System;
using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class UpsertSeanceRequest
    {
        public int Id { get; }

        [Required]
        public DateTime DateTime { get; }

        [Required]
        public int FilmId { get; }

        [Required]
        public int HallId { get; }

        [Required]
        public ServicePrice[] Services { get; }

        [Required]
        public SeatPrice[] SeatPrices { get; }

        public UpsertSeanceRequest(
            int id,
            DateTime dateTime,
            int filmId,
            int hallId,
            ServicePrice[] services,
            SeatPrice[] seatPrices
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
