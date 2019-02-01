using System;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class FilmEntity
    {
        public int Id { get; }
        public string Title { get; }
        public DateTime ReleaseDate { get; }
        public string Description { get; }
        public DateTime StartShowingDate { get; }
        public DateTime FinishShowingDate { get; }
        public TimeSpan FilmDuration { get; }

        public FilmEntity(
            int id,
            string title,
            DateTime release,
            string description,
            DateTime startShowingDate,
            DateTime finishShowingDate,
            TimeSpan filmDuration
        )
        {
            Id = id;
            Title = title;
            ReleaseDate = release;
            Description = description;
            StartShowingDate = startShowingDate;
            FinishShowingDate = finishShowingDate;
            FilmDuration = filmDuration;
        }
    }
}
