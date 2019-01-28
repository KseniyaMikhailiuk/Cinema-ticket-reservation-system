using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IFilmService
    {
        Task<UpsertItemResultStatusAndId> AddFilmAsync(FilmModel filmModel);
        Task<UpsertItemResultStatus> AddFilmPosterAsync(FilmPosterModel filmPosterModel);
    }
}
