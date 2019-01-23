namespace CinemaReservation.DataAccessLayer.Entities
{
    public class HallEntity
    {
        public string Name { get; }
        public int CinemaId { get; }

        public HallEntity(
            string name,
            int cinemaId
        )
        {
            Name = name;
            CinemaId = cinemaId;
        }
    }
}
