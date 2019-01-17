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
                id: -1,
                name: registrationModel.Name,
                surname: registrationModel.Surname,
                email: registrationModel.Email,
                passwordHash: passwordHashAndSalt.PasswordHash,
                salt: passwordHashAndSalt.Salt,
                isAdmin: false
            );

            await _userRepository.UpsertAsync(userEntity);

            userEntity = await _userRepository.GetByEmailAsync(registrationModel.Email);

            return new AuthorizationResultModel(
                userEntity.Id,
                userEntity.Name,
                userEntity.Surname,
                userEntity.Email,
                userEntity.IsAdmin,
                ResultStatus.Ok
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
                    userEntity.IsAdmin,
                    ResultStatus.Ok
                );
            }

            return new AuthorizationResultModel(
                ResultStatus.IncorrectLoginData
            );
        }
    }
}
