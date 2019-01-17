using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IUserRepository
    {
        Task<int> UpsertAsync(UserEntity userEntity);
        Task<UserEntity> GetByEmailAsync(string email);
    }
}
