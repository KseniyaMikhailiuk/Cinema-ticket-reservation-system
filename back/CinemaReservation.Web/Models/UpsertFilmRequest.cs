using System;
using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class UpsertFilmRequest
    {
        public int Id { get; }

        [Required]
        public string Title { get; }

        [Required]
        public DateTime Release { get; }

        [Required]
        public string Description { get; }

        [Required]
        public DateTime StartShowingDate { get; }

        [Required]
        public DateTime FinishShowingDate { get; }

        [Required]
        public FilmDuration FilmDuration { get; }

        [Required]


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
