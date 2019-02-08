namespace CinemaReservation.Web.Models
{
    public class GetCinemasResponse
    {
        public string Name { get; }
        public int Id { get; }
        public int CityId { get; }

        public GetCinemasResponse(
            string name,
            int id,
            int parentId
        )
        {
            Name = name;
            Id = id;
            CityId = parentId;
        }
    }
}
