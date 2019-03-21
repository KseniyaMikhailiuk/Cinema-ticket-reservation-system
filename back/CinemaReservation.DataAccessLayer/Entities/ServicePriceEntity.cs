namespace CinemaReservation.DataAccessLayer.Entities
{
    public class ServicePriceEntity
    {
        public int SeanceId { get; }
        public int Id { get; }
        public decimal Price { get; }

        public ServicePriceEntity(
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
