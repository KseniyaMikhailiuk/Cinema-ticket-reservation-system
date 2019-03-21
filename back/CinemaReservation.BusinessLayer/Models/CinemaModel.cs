namespace CinemaReservation.BusinessLayer.Models
{
    public class CinemaModel
    {
        public int Id { get; }
        public string Name { get; }
        public int CityId { get; }

        public CinemaModel(
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
