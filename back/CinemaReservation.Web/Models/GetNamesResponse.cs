namespace CinemaReservation.Web.Models
{
    public class GetNamesResponse
    {
        public string Name { get; }
        public int Id { get; }
        public int ParentId { get; }

        public GetNamesResponse(
            string name,
            int id,
            int parentId
        )
        {
            Name = name;
            Id = id;
            ParentId = parentId;
        }
    }
}
