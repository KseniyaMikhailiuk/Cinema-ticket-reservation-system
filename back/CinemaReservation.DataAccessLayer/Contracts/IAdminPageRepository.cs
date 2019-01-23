using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdminPageRepository
    {
        Task<int> AddCinemaAsync(CinemaEntity cinemaEntity);
        Task<int> AddHallAsync(HallEntity cinemaEntity);
        Task AddHallPlanAsync(List<SeatEntity> cinemaEntity);
    }
}
