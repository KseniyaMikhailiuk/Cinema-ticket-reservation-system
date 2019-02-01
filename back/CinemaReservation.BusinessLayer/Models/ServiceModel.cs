namespace CinemaReservation.BusinessLayer.Models
{
    public class ServiceModel
    {
        public int Id { get; }
        public string Name { get; }

        public ServiceModel(
            int id,
            string name
        )
        {
            Id = id;
            Name = name;
        }
    }
}
