using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class UpsertCinemaRequest
    {
        public int Id { get; }

        [Required]
        public string Name { get; }

        [Required]
        public int CityId { get; }

        public UpsertCinemaRequest(
            int id,
            int cityId,
            string name
        )
        {
            Id = id;
            Name = name;
            CityId = cityId;
        }
    }
}
