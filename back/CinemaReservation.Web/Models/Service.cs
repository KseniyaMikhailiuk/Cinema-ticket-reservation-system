namespace CinemaReservation.Web.Models
{
    public class Service
    {
        public int Id { get; }
        public decimal Price { get; }

        public Service(
            int id,
            decimal price
        )
        {
            Id = id;
            Price = price;
        }
    }
}
