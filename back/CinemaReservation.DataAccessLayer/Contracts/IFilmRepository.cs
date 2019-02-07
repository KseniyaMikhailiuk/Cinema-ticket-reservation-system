using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IFilmRepository
    {
        Task<int> UpsertFilmAsync(FilmEntity filmEntity);
        Task<AddOperationResultEntity> InsertFilmPosterAsync(FilmPosterEntity filmPosterEntity);
        Task<List<OptionNameIdEntity>> GetFilmOptionsAsync();
        Task<FilmEntity> GetFilmAsync(int id);
        Task<FilmPosterEntity> GetFilmPosterAsync(int id);
    }
}
