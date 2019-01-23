namespace CinemaReservation.Web.Models
{
    public class Hall
    {
        public string Name { get; }
        public int Id { get; }

        public Hall(
            string name,
            int id
        )
        {
            Name = name;
            Id = id;
        }
    }
}
