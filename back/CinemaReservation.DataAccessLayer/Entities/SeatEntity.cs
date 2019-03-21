namespace CinemaReservation.DataAccessLayer.Entities
{
    public class SeatEntity
    {
        public int SeatTypeId { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public SeatEntity(
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
