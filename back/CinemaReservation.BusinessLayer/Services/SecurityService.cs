using System;
using CinemaReservation.BusinessLayer.Contracts;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Linq;

namespace CinemaReservation.BusinessLayer.Services
{
    public class SecurityService: ISecurityService
    {
        public bool CheckPasswordCorrectness(byte[] passwordHash, byte[] salt, string passwordToCheck)
        {
            byte[] passwordToCheckHash = GetHash(passwordToCheck, salt);
            return passwordHash.SequenceEqual(passwordToCheckHash);
        }

        public PasswordHashAndSalt GetPasswordHashAndSalt(string password)
        {
            byte[] salt = new byte[64];
            using (var randNumberGenerator = RandomNumberGenerator.Create())
            {
                randNumberGenerator.GetBytes(salt);
            }
            byte[] passwordHash = GetHash(password, salt);
            return new PasswordHashAndSalt(passwordHash, salt);
        }

        public byte[] GetHash(string password, byte[] salt)
        {
            return KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA256,
                iterationCount: 10000,
                numBytesRequested: 256
            );
        }
    }
}
