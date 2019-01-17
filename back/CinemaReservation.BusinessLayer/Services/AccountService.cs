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
        private readonly ISecurityService _securityService;

        public AccountService(IUserRepository userRepository, ISecurityService securityService)
        {
            _userRepository = userRepository;
            _securityService = securityService;
        }
        public async Task<AuthorizationResponseModel> RegisterUser(RegistrationModel registrationModel)
        {
            if (_userRepository.GetByEmail(registrationModel.Email) != null)
            {
                return null;
            }

            var isAdmin = false;
            var password = _securityService.GetPasswordHashAndSalt(registrationModel.Password);
            UserRegistrationEntity userRegistrationEntity = new UserRegistrationEntity(
                registrationModel.Name,
                registrationModel.Surname,
                registrationModel.Email,
                password.passwordHash,
                password.salt,
                isAdmin
            );

            int userId = await _userRepository.Create(userRegistrationEntity);
            AuthorizationResponseModel response = new AuthorizationResponseModel(
                userId,
                registrationModel.Name,
                registrationModel.Surname,
                registrationModel.Email,
                isAdmin
            );

            return response;
        }

        public async Task<AuthorizationResponseModel> AuthorizeUser(LoginModel loginModel)
        {
            UserEntity userEntity = await _userRepository.GetByEmail(loginModel.Email);
            if (userEntity == null)
            {
                return null;
            }

            if (_securityService.IsCorrectPassword(userEntity.PasswordHash, userEntity.Salt, loginModel.Password))
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
    }
}
