namespace CinemaReservation.BusinessLayer.Models
{
    public class SeatModel
    {
        public string SeatType { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public SeatModel(
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
