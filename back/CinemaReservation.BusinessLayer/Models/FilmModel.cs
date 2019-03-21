using System;

namespace CinemaReservation.BusinessLayer.Models
{
    public class FilmModel
    {
        public int Id { get; }
        public string Title { get; }
        public DateTime ReleaseDate { get; }
        public string Description { get; }
        public DateTime StartShowingDate { get; }
        public DateTime FinishShowingDate { get; }
        public TimeSpan FilmDuration { get; }
        public string PosterUniqueId { get; }

        public FilmModel(
            int id,
            string title,
            string posterUniqueId,
            DateTime releaseDate,
            string description,
            DateTime startShowingDate,
            DateTime finishShowingDate,
            TimeSpan filmDuration
        )
        {
            Id = id;
            Title = title;
            PosterUniqueId = posterUniqueId;
            ReleaseDate = releaseDate;
            Description = description;
            StartShowingDate = startShowingDate;
            FinishShowingDate = finishShowingDate;
            FilmDuration = filmDuration;
        }
    }
}
