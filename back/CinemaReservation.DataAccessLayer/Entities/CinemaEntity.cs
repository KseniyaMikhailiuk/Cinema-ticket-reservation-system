namespace CinemaReservation.DataAccessLayer.Entities
{
    public class CinemaEntity
    {
        public int Id { get; }
        public string Name { get; }
        public string City { get; }

        public CinemaEntity(
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
