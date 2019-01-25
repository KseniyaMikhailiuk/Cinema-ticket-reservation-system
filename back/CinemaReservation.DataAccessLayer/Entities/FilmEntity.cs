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


        public FilmEntity(
            string title,
            DateTime release,
            string description,
            DateTime startShowingDate,
            DateTime finishShowingDate
        )
        {
            Title = title;
            ReleaseDate = release;
            Description = description;
            StartShowingDate = startShowingDate;
            FinishShowingDate = finishShowingDate;
        }

        public FilmEntity(
            int id,
            string title,
            DateTime release,
            string description,
            DateTime startShowingDate,
            DateTime finishShowingDate
        )
        {
            Id = id;
            Title = title;
            ReleaseDate = release;
            Description = description;
            StartShowingDate = startShowingDate;
            FinishShowingDate = finishShowingDate;
        }
    }
}
