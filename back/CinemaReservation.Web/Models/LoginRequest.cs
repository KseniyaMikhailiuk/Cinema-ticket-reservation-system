﻿namespace CinemaReservation.PresentationLayer.Models
{
    public class LoginRequest
    {
        public string Email { get; }
        public string Password { get; }

        public LoginRequest(
            string email,
            string password
        )
        {
            Email = email;
            Password = password;
        }
    }
}
