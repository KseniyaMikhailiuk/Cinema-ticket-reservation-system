using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IFilmService
    {
        Task<UpsertItemResultStatusAndId> UpsertFilmAsync(FilmModel filmModel);
        Task<UpsertItemResultStatus> AddFilmPosterAsync(FilmPosterModel filmPosterModel);
        Task<List<FilterOptionModel>> GetFilmOptionsAsync();
    }
}
