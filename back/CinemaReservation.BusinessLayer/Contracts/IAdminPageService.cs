using CinemaReservation.BusinessLayer.Models;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAdminPageService
    {
        Task<CinemaFilterOptionsModel> GetCinemaFilterOptionsAsync();
    }
}
