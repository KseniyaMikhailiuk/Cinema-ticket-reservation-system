using CinemaReservation.BusinessLayer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IFilterListService
    {
        Task<CinemaFilterOptionsModel> GetCinemaOptionsAsync();
        Task<List<FilterOptionModel>> GetFilmOptionsAsync();
    }
}
