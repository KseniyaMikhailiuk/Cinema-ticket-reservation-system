using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAccountService
    {
        Task<RegistrationResultModel> RegisterUserAsync(RegistrationModel registrationModel);
        Task<AuthorizationResultModel> AuthorizeUserAsync(LoginModel loginModel);
        Task<GetUserInfoResultModel> GetUserInfoAsync(int id);
    }
}
