using System;
using System.Collections.Generic;
using System.Text;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class CinemaEntity
    {
        public string Name { get; }
        public string City { get; }

        public CinemaEntity(
            string name,
            string city
        )
        {
            Name = name;
            City = city;
        }
    }
}
