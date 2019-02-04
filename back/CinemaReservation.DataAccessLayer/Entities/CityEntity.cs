namespace CinemaReservation.DataAccessLayer.Entities
{
    public class CityEntity
    {
        public int Id { get; }
        public string Name { get; }

        public CityEntity(
            int id,
            string name
        )
        {
            Id = id;
            Name = name;
        }
    }
}
