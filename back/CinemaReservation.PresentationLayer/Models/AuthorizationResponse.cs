using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CinemaReservation.PresentationLayer.Models
{
    public class AuthorizationResponse
    {
        public AuthorizationResponse(
            int id,
            string name,
            string surname,
            string email
        )
        {
            Id = id;
            Name = name;
            Surname = surname;
            Email = email;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
    }
}
