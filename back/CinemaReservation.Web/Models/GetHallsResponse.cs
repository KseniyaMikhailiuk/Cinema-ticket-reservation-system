namespace CinemaReservation.Web.Models
{
    public class GetHallsResponse
    {
        public string Name { get; }
        public int Id { get; }
        public int CinemaId { get; }

        public GetHallsResponse(
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
