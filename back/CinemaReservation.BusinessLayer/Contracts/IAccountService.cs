using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAccountService
    {
        Task<AuthorizationResponse> RegisterUser(RegistrationModel registrationRequest);

        Task<AuthorizationResponse> AuthorizeUser(LoginModel loginRequest);
    }
}
