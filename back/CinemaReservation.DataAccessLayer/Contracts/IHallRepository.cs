using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IHallRepository
    {
        Task<int> UpsertHallAsync(HallEntity cinemaEntity);
        Task AddHallPlanAsync(List<SeatEntity> cinemaEntity);
        Task DeleteHallPlanAsync(int hallId);
        Task<IReadOnlyCollection<HallEntity>> GetHallsAsync();
    }
}
