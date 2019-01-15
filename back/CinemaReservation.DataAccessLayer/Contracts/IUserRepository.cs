using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IUserRepository
    {
        Task<int> Create(UserRegistrationEntity registrationRequest);
        Task<UserAuthorizationSuccessEntity> GetById(int id);
        Task<UserAuthorizationSuccessEntity> GetByEmail(string email);
    }
}
