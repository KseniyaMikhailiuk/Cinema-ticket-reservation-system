using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CinemaReservation.Web.Models
{
    public class GetUserInfoResponse
    {
        public int Id { get; }
        public string Name { get; }
        public string Surname { get; }
        public string Email { get; }
        public bool IsAdmin { get; }

        public GetUserInfoResponse(
            int id,
            string name,
            string surname,
            string email,
            bool isAdmin
        )
        {
            Id = id;
            Name = name;
            Surname = surname;
            Email = email;
            IsAdmin = isAdmin;
        }
    }
}
