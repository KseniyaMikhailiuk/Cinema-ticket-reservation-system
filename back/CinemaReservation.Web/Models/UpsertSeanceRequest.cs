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
        public PriceItem[] Services { get; }

        [Required]
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
