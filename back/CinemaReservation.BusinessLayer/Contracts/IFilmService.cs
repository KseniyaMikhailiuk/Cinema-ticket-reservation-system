using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IFilmService
    {
        Task<int> UpsertFilmAsync(FilmModel filmModel);
        Task<UpsertItemResultStatus> InsertFilmPosterAsync(FilmPosterModel filmPosterModel);
        Task<List<OptionModel>> GetFilmOptionsAsync();
    }
}
