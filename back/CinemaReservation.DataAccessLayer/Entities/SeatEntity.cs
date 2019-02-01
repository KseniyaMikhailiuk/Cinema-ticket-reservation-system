namespace CinemaReservation.DataAccessLayer.Entities
{
    public class SeatEntity
    {
        public string SeatType { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public SeatEntity(
            string type,
            int raw,
            int line,
            int hallId
        )
        {
            SeatType = type;
            Raw = raw;
            Line = line;
            HallId = hallId;
        }
    }
}
