namespace CinemaReservation.BusinessLayer.Models
{
    public class SeatTypeModel
    {
        public string Name { get; }
        public int Id { get; }
        public int WidthScale { get; }

        public SeatTypeModel(
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
