namespace CinemaReservation.BusinessLayer.Models
{
    public class CinemaModel
    {
        public int Id { get; }
        public string Name { get; }
        public string City { get; }

        public CinemaModel(
            int id,
            string name,
            string city
        )
        {
            Id = id;
            Name = name;
            City = city;
        }
    }
}
