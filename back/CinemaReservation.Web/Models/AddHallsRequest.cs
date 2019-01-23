namespace CinemaReservation.Web.Models
{
    public class AddHallsRequest
    {
        public Hall[] Halls { get; }
        public Seat[] Seats { get; }
        public int CinemaId { get; }

        public AddHallsRequest(
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
