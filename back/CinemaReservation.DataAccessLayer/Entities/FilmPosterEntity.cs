using System;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class FilmPosterEntity
    {
        public string PosterUniqueId { get; }
        public int FilmId { get; }

        public FilmPosterEntity(
            int filmId,
            string posterUniqueId
        )
        {
            FilmId = filmId;
            PosterUniqueId = posterUniqueId;
        }

        public FilmPosterEntity(
            int filmId,
            Guid posterUniqueId
        )
        {
            FilmId = filmId;
            PosterUniqueId = posterUniqueId.ToString();
        }
    }
}
