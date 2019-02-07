namespace CinemaReservation.Web.Models
{
    public class Seat
    {
        public int SeatTypeId { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public Seat(
            int seatTypeId,
            int raw,
            int line,
            int hallId
        )
        {
            SeatTypeId = seatTypeId;
            Raw = raw;
            Line = line;
            HallId = hallId;
        }
    }
}
