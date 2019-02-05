namespace CinemaReservation.DataAccessLayer.Entities
{
    public class SeatPriceEntity
    {
        public int SeanceId { get; }
        public int Id { get; }
        public decimal Price { get; }

        public SeatPriceEntity(
            int seanceId,
            int id,
            decimal price
        )
        {
            SeanceId = seanceId;
            Id = id;
            Price = price;
        }
    }
}
