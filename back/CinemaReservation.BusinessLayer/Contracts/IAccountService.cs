using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAccountService
    {
        Task<AuthorizationResponseModel> RegisterUserAsync(RegistrationModel registrationModel);
        Task<AuthorizationResponseModel> AuthorizeUserAsync(LoginModel loginModel);
    }
}
