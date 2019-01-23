namespace CinemaReservation.Web.Models
{
    public class Seat
    {
        public string Type { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public Seat(
            string type,
            int raw,
            int line,
            int hallId
        )
        {
            Type = type;
            Raw = raw;
            Line = line;
            HallId = hallId;
        }
    }
}
