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

        public async Task<AuthorizationResultModel> RegisterUserAsync(RegistrationModel registrationModel)
        {
            if (await _userRepository.GetByEmailAsync(registrationModel.Email) != null)
            {
                return new AuthorizationResultModel(
                    ResultStatus.UserExists
                );
            }

            PasswordHashAndSalt passwordHashAndSalt = _securityService.GetPasswordHashAndSalt(registrationModel.Password);
            UserEntity userEntity = new UserEntity(
                registrationModel.Name,
                registrationModel.Surname,
                registrationModel.Email,
                passwordHashAndSalt.PasswordHash,
                passwordHashAndSalt.Salt
            );

            int userId = await _userRepository.UpsertAsync(userEntity);

            return new AuthorizationResultModel(
                userId,
                registrationModel.Name,
                registrationModel.Surname,
                registrationModel.Email,
                ResultStatus.Ok,
                false
            );
        }

        public async Task<AuthorizationResultModel> AuthorizeUserAsync(LoginModel loginModel)
        {
            UserEntity userEntity = await _userRepository.GetByEmailAsync(loginModel.Email);
            if (userEntity == null)
            {
                return new AuthorizationResultModel(
                    ResultStatus.IncorrectLoginData
                );
            }

            if (_securityService.CheckPasswordCorrectness(userEntity.PasswordHash, userEntity.Salt, loginModel.Password))
            {
                return new AuthorizationResultModel(
                    userEntity.Id,
                    userEntity.Name,
                    userEntity.Surname,
                    userEntity.Email,
                    ResultStatus.Ok,
                    userEntity.IsAdmin
                );
            }

            return new AuthorizationResultModel(
                ResultStatus.IncorrectLoginData
            );
        }
    }
}
