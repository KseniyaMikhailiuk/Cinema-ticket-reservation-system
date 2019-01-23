namespace CinemaReservation.BusinessLayer.Models
{
    public class SeatModel
    {
        public string Type { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public SeatModel(
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
