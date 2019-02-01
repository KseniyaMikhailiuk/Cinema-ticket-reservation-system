namespace CinemaReservation.BusinessLayer.Models
{
    public class ServiceModel
    {
        public int Id { get; }
        public decimal Price { get; }
        public string Name { get; }

        public ServiceModel(
            string name
        )
        {
            Name = name;
        }
    }
}
