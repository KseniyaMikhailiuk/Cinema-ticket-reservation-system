using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IFilmRepository
    {
        Task<AddOperationResultEntity> UpsertFilmAsync(FilmEntity filmEntity);
        Task<AddOperationResultEntity> InsertFilmPosterAsync(FilmPosterEntity filmPosterEntity);
    }
}
