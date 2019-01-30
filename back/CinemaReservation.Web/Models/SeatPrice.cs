namespace CinemaReservation.Web.Models
{
    public class SeatPrice
    {
        public decimal Price { get; }
        public int TypeId { get; }

        public SeatPrice(
            decimal price,
            int typeId
        )
        {
            Price = price;
            TypeId = typeId;
        }
    }
}
