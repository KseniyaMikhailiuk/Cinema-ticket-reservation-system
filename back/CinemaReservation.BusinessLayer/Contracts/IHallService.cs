using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;


namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IHallService
    {
        Task<UpsertItemResultStatus> AddHallsAsync(HallsModel hallsModel);
        Task<UpsertItemResultStatus> EditHallsAsync(HallsModel hallsModel);
    }
}
