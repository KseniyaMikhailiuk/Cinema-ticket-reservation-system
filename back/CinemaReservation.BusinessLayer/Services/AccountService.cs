using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Contracts;

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

        public async Task<AuthorizationResponseModel> RegisterUserAsync(RegistrationModel registrationModel)
        {
            if (await _userRepository.GetByEmailAsync(registrationModel.Email) != null)
            {
                return null;
            }

            bool isAdmin = false;
            PasswordHashAndSalt passwordHashAndSalt = _securityService.GetPasswordHashAndSalt(registrationModel.Password);
            UserRegistrationEntity userRegistrationEntity = new UserRegistrationEntity(
                registrationModel.Name,
                registrationModel.Surname,
                registrationModel.Email,
                passwordHashAndSalt.PasswordHash,
                passwordHashAndSalt.Salt,
                isAdmin
            );

            int userId = await _userRepository.UpsertAsync(userRegistrationEntity);
            AuthorizationResponseModel result = new AuthorizationResponseModel(
                userId,
                registrationModel.Name,
                registrationModel.Surname,
                registrationModel.Email,
                isAdmin
            );

            return result;
        }

        public async Task<AuthorizationResponseModel> AuthorizeUserAsync(LoginModel loginModel)
        {
            UserEntity userEntity = await _userRepository.GetByEmailAsync(loginModel.Email);
            if (userEntity == null)
            {
                return null;
            }

            if (_securityService.CheckPasswordCorrectness(userEntity.PasswordHash, userEntity.Salt, loginModel.Password))
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
