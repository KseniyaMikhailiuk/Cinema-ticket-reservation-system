using System;
using System.Collections.Generic;
using System.Text;

namespace CinemaReservation.BusinessLayer.Models
{
    public class CinemaResultModel
    {
        public string Name { get; }
        public string City { get; }
        public int Id { get; }
        public AddCinemaResultStatus AddCinemaResultStatus { get; }

        public CinemaResultModel(
            string name,
            string city,
            int id,
            AddCinemaResultStatus addCinemaResultStatus
        )
        {
            Name = name;
            City = city;
            Id = id;
            AddCinemaResultStatus = addCinemaResultStatus;
        }

        public CinemaResultModel(
            AddCinemaResultStatus addCinemaResultStatus
        )
        {
            AddCinemaResultStatus = addCinemaResultStatus;
        }
    }
}
