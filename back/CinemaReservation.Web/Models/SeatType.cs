namespace CinemaReservation.Web.Models
{
    public class SeatType
    {
        public string Name { get; }
        public int Id { get; }
        public int WidthScale { get; }

        public SeatType(
            string name,
            int id,
            int widthScale
        )
        {
            Name = name;
            Id = id;
            WidthScale = widthScale;
        }
    }
}
