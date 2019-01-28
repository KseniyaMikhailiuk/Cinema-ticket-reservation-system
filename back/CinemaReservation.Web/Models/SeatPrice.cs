namespace CinemaReservation.Web.Models
{
    public class SeatPrice
    {
        public decimal Price { get; }
        public int SeatTypeId { get; }

        public SeatPrice(
            decimal price,
            int seatTypeId
        )
        {
            Price = price;
            SeatTypeId = seatTypeId;
        }
    }
}
