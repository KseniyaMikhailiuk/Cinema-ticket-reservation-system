using System;
using System.Collections.Generic;
using System.Text;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ISecurityService
    {
        byte[] GetHash(string password, byte[] salt);
        (byte[] passwordHash, byte[] salt) GetPasswordHashAndSalt(string password);
        bool IsCorrectPassword(byte[] passwordHash, byte[] salt, string passwordToCheck);
    }
}
