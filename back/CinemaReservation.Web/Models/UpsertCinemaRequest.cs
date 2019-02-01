using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class UpsertCinemaRequest
    {
        public int Id { get; }

        [Required]
        public string Name { get; }

        [Required]
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
