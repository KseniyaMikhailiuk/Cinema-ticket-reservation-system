namespace CinemaReservation.Web.Models
{
    public class PriceItem
    {
        public decimal Price { get; }
        public int Id { get; }

        public PriceItem(
            decimal price,
            int id
        )
        {
            Price = price;
            Id = id;
        }
    }
}
