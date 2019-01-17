using System;
using CinemaReservation.BusinessLayer.Contracts;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using System.Linq;
using System.Text;

namespace CinemaReservation.BusinessLayer.Services
{
    public class SecurityService: ISecurityService
    {
        private const int SALT_SIZE = 64;

        public bool CheckPasswordCorrectness(byte[] passwordHash, byte[] salt, string passwordToCheck)
        {
            byte[] passwordToCheckHash = GetPasswordHash(passwordToCheck, salt);
            return passwordHash.SequenceEqual(passwordToCheckHash);
        }

        public byte[] GetSalt()
        {
            byte[] salt = new byte[SALT_SIZE];

            using (RNGCryptoServiceProvider randNumberGenerator = new RNGCryptoServiceProvider())
            {
                randNumberGenerator.GetBytes(salt);
            }

            return salt;
        }

        public byte[] GetPasswordHash(string password, byte[] salt)
        {
            byte[] preparedPassword = Combine(Encoding.UTF8.GetBytes(password), salt);

            using (SHA512 sha = new SHA512Managed())
            {
                return sha.ComputeHash(preparedPassword);
            }
        }

        private static byte[] Combine(byte[] password, byte[] salt)
        {
            byte[] result = new byte[password.Length + salt.Length];

            Buffer.BlockCopy(password, 0, result, 0, password.Length);
            Buffer.BlockCopy(salt, 0, result, password.Length, salt.Length);

            return result;
        }
    }
}
