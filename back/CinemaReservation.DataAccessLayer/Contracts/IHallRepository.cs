using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IHallRepository
    {
        Task<int> UpsertHallAsync(HallEntity cinemaEntity);
        Task<AddOperationResultStatus> AddHallPlanAsync(List<SeatEntity> cinemaEntity);
        Task<AddOperationResultStatus> DeleteHallPlanAsync(int hallId);
        Task<IReadOnlyCollection<HallEntity>> GetHallsAsync();
    }
}
