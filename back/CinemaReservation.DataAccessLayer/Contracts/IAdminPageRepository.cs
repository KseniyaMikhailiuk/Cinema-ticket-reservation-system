using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdminPageRepository
    {
        Task<CinemaEntity> UpsertCinemaAsync(CinemaEntity cinemaEntity);
        Task<HallEntity> UpsertHallAsync(HallEntity cinemaEntity);
        Task<OperationResultStatus> AddHallPlanAsync(List<SeatEntity> cinemaEntity);
        Task<OperationResultStatus> RemoveHallPlanAsync(int hallId);
    }
}
