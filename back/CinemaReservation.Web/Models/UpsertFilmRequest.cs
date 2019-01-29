using System;

namespace CinemaReservation.Web.Models
{
    public class UpsertFilmRequest
    {
        public int Id { get; }
        public string Title { get; }
        public DateTime Release { get; }
        public string Description { get; }
        public DateTime StartShowingDate { get; }
        public DateTime FinishShowingDate { get; }
        public FilmDuration FilmDuration { get; }


        public UpsertFilmRequest(
            int id,
            string title,
            DateTime release,
            string description,
            DateTime startShowingDate,
            DateTime finishShowingDate,
            FilmDuration filmDuration
        )
        {
            Id = id;
            Title = title;
            Release = release;
            Description = description;
            StartShowingDate = startShowingDate;
            FinishShowingDate = finishShowingDate;
            FilmDuration = filmDuration;
        }
    }
}
