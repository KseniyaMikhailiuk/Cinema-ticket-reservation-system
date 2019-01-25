using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdminPageRepository
    {
        Task<AddOperationResultEntity> UpsertCinemaAsync(CinemaEntity cinemaEntity);
        Task<AddOperationResultEntity> UpsertHallAsync(HallEntity cinemaEntity);
        Task<AddOperationResultStatus> AddHallPlanAsync(List<SeatEntity> cinemaEntity);
        Task<AddOperationResultStatus> RemoveHallPlanAsync(int hallId);
        Task<AddOperationResultEntity> UpsertFilmAsync(FilmEntity filmEntity);
        Task<AddOperationResultEntity> UpsertFilmPosterAsync(FilmPosterEntity filmPosterEntity);
    }
}
