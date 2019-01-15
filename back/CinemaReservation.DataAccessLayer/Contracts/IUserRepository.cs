using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Models;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    interface IUserRepository
    {
        void Create(RegistrationRequest registrationRequest);
        Task<AuthorizationResponse> FindById(int id);
        Task<AuthorizationResponse> FindByEmail(string email);
    }
}
