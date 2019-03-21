using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class UpsertAdditionalServiceRequest
    {
        public int Id { get; }

        [Required]
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
