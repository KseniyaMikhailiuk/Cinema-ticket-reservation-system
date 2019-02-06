using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IFilmService
    {
        Task<UpsertItemResultStatusAndId> UpsertFilmAsync(FilmModel filmModel);
        Task<UpsertItemResultStatus> InsertFilmPosterAsync(FilmPosterModel filmPosterModel);
        Task<List<OptionModel>> GetFilmOptionsAsync();
    }
}
