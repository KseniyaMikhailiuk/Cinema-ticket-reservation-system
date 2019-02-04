using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class UpsertCityRequest
    {
        public int Id { get; }

        [Required]
        public string Name { get; }

        public UpsertCityRequest(
            int id,
            string name
        )
        {
            Id = id;
            Name = name;
        }
    }
}
