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

        public AccountService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<AuthorizationResponse> RegisterUser(RegistrationModel registrationRequest)
        {
            byte[] passwordHash = new byte[1];
            byte[] salt = new byte[1];

            UserRegistrationEntity userRegistrationEntity = new UserRegistrationEntity(
                registrationRequest.Name,
                registrationRequest.Surname,
                registrationRequest.Email,
                passwordHash,
                salt
            );
            int userId = await _userRepository.Create(userRegistrationEntity);
            AuthorizationResponse response = new AuthorizationResponse(
                userId,
                registrationRequest.Name,
                registrationRequest.Surname,
                registrationRequest.Email
            );
            return response;
        }

        public async Task<AuthorizationResponse> AuthorizeUser(LoginModel loginRequest)
        {

        }
    }
}
