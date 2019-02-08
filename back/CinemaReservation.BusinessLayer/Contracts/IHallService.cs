using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;


namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IHallService
    {
        Task UpsertHallsAsync(CinemaHallsModel hallsModel);
        Task<IReadOnlyCollection<HallModel>> GetHallsOptionsAsync();
    }
}
