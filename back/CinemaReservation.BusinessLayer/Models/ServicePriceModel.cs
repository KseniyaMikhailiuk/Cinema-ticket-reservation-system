namespace CinemaReservation.BusinessLayer.Models
{
    public class ServicePriceModel
    {
        public decimal Price { get; }
        public int Id { get; }

        public ServicePriceModel(
            decimal price,
            int id
        )
        {
            Price = price;
            Id = id;
        }
    }
}
