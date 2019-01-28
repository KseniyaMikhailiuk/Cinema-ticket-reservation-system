namespace CinemaReservation.BusinessLayer.Models
{
    public class SeatPriceModel
    {
        public decimal Price { get; }
        public int SeatTypeId { get; }

        public SeatPriceModel(
            decimal price,
            int seatTypeId
        )
        {
            Price = price;
            SeatTypeId = seatTypeId;
        }
    }
}
