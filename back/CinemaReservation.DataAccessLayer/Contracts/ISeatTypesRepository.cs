using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ISeatTypesRepository
    {
        Task<List<NameIdEntity>> GetSeatTypeOptionsAsync();
    }
}
