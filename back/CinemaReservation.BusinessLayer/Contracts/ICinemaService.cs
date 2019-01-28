using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ICinemaService
    {
        Task<UpsertItemResultStatusAndId> AddCinemaAsync(CinemaModel cityModel);
        Task<UpsertItemResultStatusAndId> EditCinemaAsync(CinemaModel cityModel);
    }
}
