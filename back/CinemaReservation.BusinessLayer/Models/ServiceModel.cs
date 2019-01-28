namespace CinemaReservation.BusinessLayer.Models
{
    public class ServiceModel
    {
        public int Id { get; }
        public decimal Price { get; }
        public string Name { get; }

        public ServiceModel(
            int id,
            decimal price
        )
        {
            Id = id;
            Price = price;
        }

        public ServiceModel(
            string name,
            decimal price
        )
        {
            Name = name;
            Price = price;
        }
    }
}
