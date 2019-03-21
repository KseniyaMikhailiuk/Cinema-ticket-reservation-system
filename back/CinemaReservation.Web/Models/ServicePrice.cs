namespace CinemaReservation.Web.Models
{
    public class ServicePrice
    {
        public decimal Price { get; }
        public int Id { get; }

        public ServicePrice(
            decimal price,
            int id
        )
        {
            Price = price;
            Id = id;
        }
    }
}
