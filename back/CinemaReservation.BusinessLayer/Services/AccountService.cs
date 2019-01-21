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

        public async Task<RegistrationResultModel> RegisterUserAsync(RegistrationModel registrationModel)
        {
            if (await _userRepository.GetUserByEmailAsync(registrationModel.Email) != null)
            {
                return new RegistrationResultModel(
                    RegistrationResultStatus.UserExists
                );
            }

            byte[] salt = _securityService.GetSalt();
            byte[] passwordHash = _securityService.GetPasswordHash(registrationModel.Password, salt);
            UserEntity userEntity = new UserEntity(
                registrationModel.Name,
                registrationModel.Surname,
                registrationModel.Email,
                passwordHash,
                salt
            );

            int userId = await _userRepository.UpsertUserAsync(userEntity);

            return new RegistrationResultModel(
                userId,
                registrationModel.Name,
                registrationModel.Surname,
                registrationModel.Email,
                RegistrationResultStatus.Ok,
                isAdmin: false
            );
        }

        public async Task<AuthorizationResultModel> AuthorizeUserAsync(LoginModel loginModel)
        {
            UserEntity userEntity = await _userRepository.GetUserByEmailAsync(loginModel.Email);

            if (userEntity == null)
            {
                return new AuthorizationResultModel(
                    AuthorizationResultStatus.IncorrectLoginData
                );
            }

            if (_securityService.CheckPasswordCorrectness(userEntity.PasswordHash, userEntity.Salt, loginModel.Password))
            {
                return new AuthorizationResultModel(
                    userEntity.Id,
                    userEntity.Name,
                    userEntity.Surname,
                    userEntity.Email,
                    AuthorizationResultStatus.Ok,
                    userEntity.IsAdmin
                );
            }

            return new AuthorizationResultModel(
                AuthorizationResultStatus.IncorrectLoginData
            );
        }

        public async Task<UserModel> GetUserInfoAsync(int id)
        {
            UserEntity userEntity = await _userRepository.GetUserByIdAsync(id);

            if (userEntity != null)
            {
                return new UserModel(
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
