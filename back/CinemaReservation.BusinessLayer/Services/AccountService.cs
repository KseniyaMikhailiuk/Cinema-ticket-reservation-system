using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Contracts;

namespace CinemaReservation.BusinessLayer.Services
{
    public class AccountService: IAccountService
    {
        public Task<AuthorizationResponse> CreateUser(RegistrationModel registrationRequest)
        {

        }

        public Task<AuthorizationResponse> VerifyUser(LoginModel loginRequest)
        {

        }
    }
}
