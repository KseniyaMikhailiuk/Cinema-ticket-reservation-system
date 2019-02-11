namespace CinemaReservation.BusinessLayer.Models
{
    public class HallModel
    {
        public int Id { get; }
        public int CinemaId { get; }
        public string Name { get; }

        public HallModel(
            string name,
            int id,
            int cinemaId
        )
        {
            Name = name;
            Id = id;
            CinemaId = cinemaId;
        }
    }
}
