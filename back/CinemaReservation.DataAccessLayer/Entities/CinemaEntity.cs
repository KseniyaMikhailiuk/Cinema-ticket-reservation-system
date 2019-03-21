namespace CinemaReservation.DataAccessLayer.Entities
{
    public class CinemaEntity
    {
        public int Id { get; }
        public string Name { get; }
        public int CityId { get; }

        public CinemaEntity(
            int id,
            string name,
            int cityId
        )
        {
            Id = id;
            Name = name;
            CityId = cityId;
        }
    }
}
