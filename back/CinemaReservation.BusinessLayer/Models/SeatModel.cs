namespace CinemaReservation.BusinessLayer.Models
{
    public class SeatModel
    {
        public int SeatTypeId { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public SeatModel(
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
