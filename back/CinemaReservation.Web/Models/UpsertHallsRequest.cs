namespace CinemaReservation.Web.Models
{
    public class UpsertHallsRequest
    {
        public Hall[] Halls { get; }
        public Seat[] Seats { get; }
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
