using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAccountService
    {
        Task<AuthorizationResponseModel> RegisterUser(RegistrationModel registrationRequest);
        Task<AuthorizationResponseModel> AuthorizeUser(LoginModel loginRequest);
    }
}
