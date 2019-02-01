using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;


namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IHallService
    {
        Task<UpsertItemResultStatus> UpsertHallsAsync(HallsModel hallsModel);
        Task<List<FilterOptionModel>> GetHallsOptionsAsync();
    }
}
