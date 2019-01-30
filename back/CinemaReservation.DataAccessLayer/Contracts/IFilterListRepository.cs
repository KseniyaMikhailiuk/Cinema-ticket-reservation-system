using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IFilterListRepository
    {
        Task<List<NameIdEntity>> GetUniqueCitiesAsync();
        Task<List<NameIdEntity>> GetUniqueCinemasAsync();
        Task<List<NameIdEntity>> GetUniqueHallsAsync();
        Task<List<NameIdEntity>> GetFilmOptionsAsync();
        Task<List<NameIdEntity>> GetSeatTypeOptionsAsync();
        Task<List<NameIdEntity>> GetServiceOptionsAsync();
    }
}
