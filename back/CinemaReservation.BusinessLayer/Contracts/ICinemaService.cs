using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ICinemaService
    {
        Task<int> UpsertCinemaAsync(CinemaModel cityModel);
        Task<IReadOnlyCollection<CinemaModel>> GetCinemasAsync();
        Task<bool> CheckId(int id);
    }
}
