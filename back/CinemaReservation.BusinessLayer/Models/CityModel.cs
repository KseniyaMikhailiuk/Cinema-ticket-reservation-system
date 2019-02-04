namespace CinemaReservation.BusinessLayer.Models
{
    public class CityModel
    {
        public int Id { get; }
        public string Name { get; }

        public CityModel(
            int id,
            string name
        )
        {
            Id = id;
            Name = name;
        }
    }
}
