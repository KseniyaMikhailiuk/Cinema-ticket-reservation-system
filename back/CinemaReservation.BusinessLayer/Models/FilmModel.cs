using System;

namespace CinemaReservation.BusinessLayer.Models
{
    public class FilmModel
    {
        public string Title { get; }
        public DateTime Release { get; }
        public string Description { get; }
        public DateTime StartShowingDate { get; }
        public DateTime FinishShowingDate { get; }


        public FilmModel(
            string title,
            DateTime release,
            string description,
            DateTime startShowingDate,
            DateTime finishShowingDate
        )
        {
            Title = title;
            Release = release;
            Description = description;
            StartShowingDate = startShowingDate;
            FinishShowingDate = finishShowingDate;
        }
    }
}
