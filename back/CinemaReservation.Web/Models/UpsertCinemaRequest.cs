namespace CinemaReservation.Web.Models
{
    public class UpsertCinemaRequest
    {
        public int Id { get; }
        public string Name { get; }
        public string City { get; }

        public UpsertCinemaRequest(
            int id,
            string city,
            string name
        )
        {
            Id = id;
            Name = name;
            City = city;
        }
    }
}
