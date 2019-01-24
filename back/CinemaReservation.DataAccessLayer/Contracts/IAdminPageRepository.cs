using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdminPageRepository
    {
        Task<CinemaResultEntity> UpsertCinemaAsync(CinemaEntity cinemaEntity);
        Task<HallResultEntity> UpsertHallAsync(HallEntity cinemaEntity);
        Task<OperationResultStatus> AddHallPlanAsync(List<SeatEntity> cinemaEntity);
        Task<OperationResultStatus> RemoveHallPlanAsync(int hallId);
    }
}
