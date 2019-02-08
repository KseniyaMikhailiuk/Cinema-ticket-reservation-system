using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ICinemaRepository
    {
        Task<int> UpsertCinemaAsync(CinemaEntity cinemaEntity);
        Task<IReadOnlyCollection<CinemaEntity>> GetCinemasAsync();
    }
}
