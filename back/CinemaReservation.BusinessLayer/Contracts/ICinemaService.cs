using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ICinemaService
    {
        Task<UpsertItemResultStatusAndId> UpsertCinemaAsync(CinemaModel cityModel);
        Task<CinemaFilterOptionsModel> GetCinemaOptionsAsync();
    }
}
