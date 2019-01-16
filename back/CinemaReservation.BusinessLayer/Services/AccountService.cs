using System;
using System.Threading.Tasks;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Contracts;
using System.Linq;

namespace CinemaReservation.BusinessLayer.Services
{
    public class AccountService: IAccountService
    {
        private readonly IUserRepository _userRepository;

        public AccountService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<AuthorizationResponseModel> RegisterUser(RegistrationModel registrationRequest)
        {
            var isAdmin = false;
            var password = GetPasswordHashAndSalt(registrationRequest.Password);
            UserRegistrationEntity userRegistrationEntity = new UserRegistrationEntity(
                registrationRequest.Name,
                registrationRequest.Surname,
                registrationRequest.Email,
                password.passwordHash,
                password.salt,
                isAdmin
            );
            int userId = await _userRepository.Create(userRegistrationEntity);
            AuthorizationResponseModel response = new AuthorizationResponseModel(
                userId,
                registrationRequest.Name,
                registrationRequest.Surname,
                registrationRequest.Email,
                isAdmin
            );
            return response;
        }

        public async Task<AuthorizationResponseModel> AuthorizeUser(LoginModel loginRequest)
        {
            UserEntity userEntity = await _userRepository.GetByEmail(loginRequest.Email);
            if (IsCorrectPassword(userEntity.PasswordHash, userEntity.Salt, loginRequest.Password))
            {
                return new AuthorizationResponseModel(
                    userEntity.Id,
                    userEntity.Name,
                    userEntity.Surname,
                    userEntity.Email,
                    userEntity.IsAdmin
                );
            }
            return null;
        }

        private static bool IsCorrectPassword(byte[] passwordHash, byte[] salt, string passwordToCheck)
        {
            byte[] passwordToCheckHash = GetHash(passwordToCheck, salt);
            return passwordHash.SequenceEqual(passwordToCheckHash);
        }

        private static (byte[] passwordHash, byte[] salt) GetPasswordHashAndSalt(string password)
        {
            byte[] salt = new byte[128 / 8];
            using (var randNumberGenerator = RandomNumberGenerator.Create())
            {
                randNumberGenerator.GetBytes(salt);
            }
            byte[] passwordHash = GetHash(password, salt);
            return (passwordHash: passwordHash, salt: salt);
        }

        private static byte[] GetHash(string password, byte[] salt)
        {
            return KeyDerivation.Pbkdf2(
                password: password,
                salt: salt,
                prf: KeyDerivationPrf.HMACSHA1,
                iterationCount: 10000,
                numBytesRequested: 256 / 8
            );
        }
    }
}
