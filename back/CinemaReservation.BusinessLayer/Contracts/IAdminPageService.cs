using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAdminPageService
    {
        Task<CinemaResultModel> AddCinemaAsync(CinemaModel cityModel);
        Task<CinemaResultModel> EditCinemaAsync(CinemaModel cityModel);
        Task<UpsertItemResultStatus> AddHallsAsync(HallsModel hallsModel);
        Task<UpsertItemResultStatus> EditHallsAsync(HallsModel hallsModel);
        Task<FilmResultModel> AddFilmAsync(FilmModel filmModel);
        Task<UpsertItemResultStatus> AddFilmPosterAsync(ImageModel imageModel);
    }
}
