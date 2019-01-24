using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdminPageRepository
    {
        Task<int> UpsertCinemaAsync(CinemaEntity cinemaEntity);
        Task<int> UpsertHallAsync(HallEntity cinemaEntity);
        Task AddHallPlanAsync(List<SeatEntity> cinemaEntity);
        Task RemoveHallPlanAsync(int hallId);
    }
}
