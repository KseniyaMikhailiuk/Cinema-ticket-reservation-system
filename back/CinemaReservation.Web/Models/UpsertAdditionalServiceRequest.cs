namespace CinemaReservation.Web.Models
{
    public class UpsertAdditionalServiceRequest
    {
        public int Id { get; }
        public string Name { get; }

        public UpsertAdditionalServiceRequest(
            string name,
            int id
        )
        {
            Id = id;
            Name = name;
        }
    }
}
