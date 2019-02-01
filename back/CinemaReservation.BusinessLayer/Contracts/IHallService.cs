using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;


namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IHallService
    {
        Task<UpsertItemResultStatus> UpsertHallsAsync(CinemaHallsModel hallsModel);
        Task<List<OptionModel>> GetHallsOptionsAsync();
    }
}
