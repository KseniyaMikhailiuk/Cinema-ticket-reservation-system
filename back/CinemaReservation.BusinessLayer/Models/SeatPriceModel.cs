namespace CinemaReservation.BusinessLayer.Models
{
    public class SeatPriceModel
    {
        public decimal Price { get; }
        public int Id { get; }

        public SeatPriceModel(
            decimal price,
            int id
        )
        {
            Price = price;
            Id = id;
        }
    }
}
