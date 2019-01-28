namespace CinemaReservation.DataAccessLayer.Entities
{
    public class SeanceServiceEntity
    {
        public int SeanceId { get; }
        public int ServiceId { get; }
        public decimal Price { get; }

        public SeanceServiceEntity(
            int seanceId,
            int serviceId,
            decimal price
        )
        {
            SeanceId = seanceId;
            ServiceId = serviceId;
            Price = price;
        }
    }
}
