namespace CinemaReservation.BusinessLayer.Models
{
    public class HallModel
    {
        public string Name { get; }
        public int Id { get; }

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
