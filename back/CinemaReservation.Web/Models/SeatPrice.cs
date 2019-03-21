namespace CinemaReservation.Web.Models
{
    public class SeatPrice
    {
        public decimal Price { get; }
        public int Id { get; }

        public SeatPrice(
            decimal price,
            int id
        )
        {
            Price = price;
            Id = id;
        }
    }
}
