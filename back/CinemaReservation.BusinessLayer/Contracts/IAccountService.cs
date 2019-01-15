using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAccountService
    {
        Task<AuthorizationResponse> CreateUser(RegistrationModel registrationRequest);

        Task<AuthorizationResponse> VerifyUser(LoginModel loginRequest);
    }
}
