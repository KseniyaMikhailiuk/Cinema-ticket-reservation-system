using System;
namespace CinemaReservation.Web.Models
{
    public class GetAdditionalServicesResponse
    {
        public int Id { get; }
        public string Name { get; }

        public GetAdditionalServicesResponse(
            int id,
            string name
        )
        {
            Id = id;
            Name = name;
        }
    }
}
