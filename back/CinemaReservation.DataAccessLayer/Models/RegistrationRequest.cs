﻿namespace CinemaReservation.DataAccessLayer.Models
{
    class RegistrationRequest
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
