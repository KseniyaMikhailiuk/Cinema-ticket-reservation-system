namespace CinemaReservation.Web.Models
{
    public class FilmDuration
    {
        public int Hours { get; }
        public int Minutes { get; }

        public FilmDuration(
            int hours,
            int minutes
        )
        {
            Hours = hours;
            Minutes = minutes;
        }
    }
}
