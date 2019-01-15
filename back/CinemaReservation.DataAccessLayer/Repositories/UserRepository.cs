using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Models;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    class UserRepository: IUserRepository
    {
        public void Create(RegistrationRequest registrationRequest)
        {

        }

        public Task<AuthorizationResponse> FindByEmail(string Email)
        {

        }

        public Task<AuthorizationResponse> FindById(int id)
        {

        }
    }
}
