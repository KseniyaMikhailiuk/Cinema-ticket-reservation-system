using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAccountService
    {
        Task<AuthorizationResultModel> RegisterUserAsync(RegistrationModel registrationModel);
        Task<AuthorizationResultModel> AuthorizeUserAsync(LoginModel loginModel);
    }
}
