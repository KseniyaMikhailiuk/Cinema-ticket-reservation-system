using Microsoft.AspNetCore.Http;
using System;

namespace CinemaReservation.Web.Models
{
    public class UpsertFilmRequest
    {
        public string Title { get; }
        public DateTime Release { get; }
        public string Description { get; }
        public DateTime StartShowingDate { get; }
        public DateTime FinishShowingDate { get; }


        public UpsertFilmRequest(
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
