using Microsoft.AspNetCore.Http;

namespace CinemaReservation.BusinessLayer.Models
{
    public class FilmPosterModel
    {
        public int FilmId { get; }
        public IFormFile FormFile { get; }

        public FilmPosterModel(
            int filmId,
            IFormFile formFile
        )
        {
            FilmId = filmId;
            FormFile = formFile;
        }
    }
}
