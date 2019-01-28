namespace CinemaReservation.DataAccessLayer.Entities
{
    public class SeanceSeatPriceEntity
    {
        public int SeanceId { get; }
        public int SeatTypeId { get; }
        public decimal Price { get; }

        public SeanceSeatPriceEntity(
            int seanceId,
            int seatTypeId,
            decimal price
        )
        {
            SeanceId = seanceId;
            SeatTypeId = seatTypeId;
            Price = price;
        }
    }
}
