namespace CinemaReservation.BusinessLayer.Models
{
    public class PriceModel
    {
        public int ItemId { get; }
        public decimal Price { get; }

        public PriceModel(
            int itemId,
            decimal price
        )
        {
            ItemId = itemId;
            Price = price;
        }
    }
}
