﻿
namespace CinemaReservation.Web.Models
{
    public class AuthorizationResponse
    {
        public int Id { get; }
        public string Name { get; }
        public string Surname { get; }
        public string Email { get; }
        public bool IsAdmin { get; }

        public AuthorizationResponse(
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
