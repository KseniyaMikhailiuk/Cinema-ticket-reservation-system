using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IFilmRepository
    {
        Task<int> UpsertFilmAsync(FilmEntity filmEntity);
        Task InsertFilmPosterAsync(FilmPosterEntity filmPosterEntity);
        Task<IReadOnlyCollection<FilmEntity>> GetFilmsByFilterAsync(string filter);
        Task<FilmEntity> GetFilmAsync(int id);
        Task<FilmPosterEntity> GetFilmPosterAsync(int id);
        Task<bool> CheckId(int id);
    }
}
