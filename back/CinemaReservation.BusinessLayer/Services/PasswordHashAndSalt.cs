using System;
using System.Collections.Generic;
using System.Text;

namespace CinemaReservation.BusinessLayer.Services
{
    public class PasswordHashAndSalt
    {
        public byte[] PasswordHash { get; }
        public byte[] Salt { get; }

        public PasswordHashAndSalt(
            byte[] passwordHash,
            byte[] salt
        )
        {
            PasswordHash = passwordHash;
            Salt = salt;
        }
    }
}
