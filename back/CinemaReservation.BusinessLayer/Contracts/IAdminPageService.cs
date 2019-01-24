using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAdminPageService
    {
        Task<CinemaResultModel> AddCinemaAsync(CinemaModel cityModel);
        Task<CinemaResultModel> EditCinemaAsync(CinemaModel cityModel);
        Task<UpsertHallResultStatus> AddHallsAsync(HallsModel hallsModel);
        Task<UpsertHallResultStatus> EditHallsAsync(HallsModel hallsModel);
    }
}
