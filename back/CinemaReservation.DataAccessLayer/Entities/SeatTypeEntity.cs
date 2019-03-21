namespace CinemaReservation.DataAccessLayer.Entities
{
    public class SeatTypeEntity
    {
        public string Name { get; }
        public int Id { get; }
        public int WidthScale { get; }

        public SeatTypeEntity(
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
