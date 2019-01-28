using Microsoft.AspNetCore.Http;

namespace CinemaReservation.BusinessLayer.Models
{
    public class FilmPosterModel
    {
        public int FilmId { get; }
        public IFormFile FormFile { get; }

        public FilmPosterModel(
            int targetId,
            IFormFile formFile
        )
        {
            FilmId = targetId;
            FormFile = formFile;
        }
    }
}
