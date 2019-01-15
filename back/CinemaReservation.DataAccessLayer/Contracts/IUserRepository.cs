using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    interface IUserRepository
    {
        Task<AuthorizationResponse> Create(RegistrationRequest registrationRequest);
        Task<AuthorizationResponse> GetById(int id);
        Task<AuthorizationResponse> GetByEmail(string email);
    }
}
