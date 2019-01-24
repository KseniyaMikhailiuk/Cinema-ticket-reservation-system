namespace CinemaReservation.BusinessLayer.Models
{
    public class HallModel
    {
        public int Id { get; }
        public string Name { get; }

        public HallModel(
            string name,
            int id
        )
        {
            Name = name;
            Id = id;
        }
    }
}
