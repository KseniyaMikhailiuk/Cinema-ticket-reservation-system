using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IFilmRepository
    {
        Task<int> UpsertFilmAsync(FilmEntity filmEntity);
        Task InsertFilmPosterAsync(FilmPosterEntity filmPosterEntity);
        Task<List<FilmEntity>> GetFilmsAsync(string nameFilter);
        Task<FilmEntity> GetFilmAsync(int id);
        Task<FilmPosterEntity> GetFilmPosterAsync(int id);
    }
}
