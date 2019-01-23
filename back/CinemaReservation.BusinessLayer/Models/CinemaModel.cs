using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Models
{
    public class CinemaModel
    {
        public string Name { get; }
        public string City { get; }

        public CinemaModel(
            string name,
            string city
        )
        {
            Name = name;
            City = city;
        }
    }
}
