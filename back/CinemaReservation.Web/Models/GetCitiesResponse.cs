namespace CinemaReservation.Web.Models
{
    public class GetCitiesResponse
    {
        public int Id { get; }
        public string Name { get; }

        public GetCitiesResponse(
            int id,
            string name
        )
        {
            Id = id;
            Name = name;
        }
    }
}
