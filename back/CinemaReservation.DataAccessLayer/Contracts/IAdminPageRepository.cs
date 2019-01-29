using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdminPageRepository
    {
        Task<List<NameIdEntity>> GetUniqueCitiesAsync();
        Task<List<NameIdEntity>> GetUniqueCinemasAsync();
        Task<List<NameIdEntity>> GetUniqueHallsAsync();
    }
}
