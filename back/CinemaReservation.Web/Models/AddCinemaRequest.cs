namespace CinemaReservation.Web.Models
{
    public class AddCinemaRequest
    {
        public string Name { get; }
        public string City { get; }

        public AddCinemaRequest(
            string city,
            string name
        )
        {
            Name = name;
            City = city;
        }
    }
}
