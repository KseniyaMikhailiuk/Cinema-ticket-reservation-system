using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ISeatTypeRepository
    {
        Task<List<SeatTypeEntity>> GetSeatTypesAsync();
    }
}
