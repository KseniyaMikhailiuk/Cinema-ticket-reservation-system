namespace CinemaReservation.DataAccessLayer.Entities
{
    public class HallEntity
    {
        public int Id { get; }
        public string Name { get; }
        public int CinemaId { get; }

        public HallEntity(
            int id,
            string name,
            int cinemaId
        )
        {
            Id = id;
            Name = name;
            CinemaId = cinemaId;
        }
    }
}
