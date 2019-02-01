namespace CinemaReservation.DataAccessLayer.Entities
{
    public class PriceEntity
    {
        public int ParentId { get; }
        public int ItemId { get; }
        public decimal Price { get; }

        public PriceEntity(
            int parentId,
            int itemId,
            decimal price
        )
        {
            ParentId = parentId;
            ItemId = itemId;
            Price = price;
        }
    }
}
