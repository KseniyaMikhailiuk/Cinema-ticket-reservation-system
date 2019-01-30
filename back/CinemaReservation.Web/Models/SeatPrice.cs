namespace CinemaReservation.Web.Models
{
    public class SeatPrice
    {
        public decimal Price { get; }
        public int TypeId { get; }

        public SeatPrice(
            decimal price,
            int seatTypeId
        )
        {
            Price = price;
            TypeId = seatTypeId;
        }
    }
}
