using System;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class FilmPosterEntity
    {
        public string PosterUniqueId { get; }
        public int FilmId { get; }
        public string PosterImageExtension { get; }

        public FilmPosterEntity(
            int filmId,
            string posterUniqueId,
            string extension
        )
        {
            FilmId = filmId;
            PosterUniqueId = posterUniqueId;
            PosterImageExtension = extension;
        }
    }
}
