using System;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class FullFilmEntity: FilmEntity
    {
        public string PosterUniqueId { get; }

        public FullFilmEntity(
            int id,
            string title,
            string posterUniqueId,
            DateTime releaseDate,
            string description,
            DateTime startShowingDate,
            DateTime finishShowingDate,
            TimeSpan filmDuration
        ) : base
            (
                id,
                title,
                releaseDate,
                description,
                startShowingDate,
                finishShowingDate,
                filmDuration
            )
        {
            PosterUniqueId = posterUniqueId;
        }
    }
}
