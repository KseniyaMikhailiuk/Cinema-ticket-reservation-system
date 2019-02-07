namespace CinemaReservation.Web.Models
{
    public class Seat
    {
        public string SeatType { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public Seat(
            string seatType,
            int raw,
            int line,
            int hallId
        )
        {
            SeatType = seatType;
            Raw = raw;
            Line = line;
            HallId = hallId;
        }
    }
}
