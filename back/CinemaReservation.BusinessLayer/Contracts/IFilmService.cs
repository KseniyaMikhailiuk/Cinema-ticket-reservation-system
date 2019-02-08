using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IFilmService
    {
        Task<int> UpsertFilmAsync(FilmModel filmModel);
        Task InsertFilmPosterAsync(FilmPosterModel filmPosterModel);
        Task<IReadOnlyCollection<OptionModel>> GetFilmNamesAsync(string filter);
    }
}
