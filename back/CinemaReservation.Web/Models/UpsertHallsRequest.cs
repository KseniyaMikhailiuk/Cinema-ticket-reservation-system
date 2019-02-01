using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class UpsertHallsRequest
    {
        [Required]
        public Hall[] Halls { get; }

        [Required]
        public Seat[] Seats { get; }

        [Required]
        public int CinemaId { get; }

        public UpsertHallsRequest(
            Hall[] halls,
            Seat[] seats,
            int cinemaId
        )
        {
            Halls = halls;
            Seats = seats;
            CinemaId = cinemaId;
        }
    }
}
