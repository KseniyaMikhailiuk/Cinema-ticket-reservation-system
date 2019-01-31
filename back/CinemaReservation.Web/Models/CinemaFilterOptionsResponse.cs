namespace CinemaReservation.Web.Models
{
    public class CinemaFilterOptionsResponse
    {
        public FilterOptionItem[] Cities { get; }
        public FilterOptionItem[] Cinemas { get; }

        public CinemaFilterOptionsResponse(
            FilterOptionItem[] cities,
            FilterOptionItem[] cinemas
        )
        {
            Cities = cities;
            Cinemas = cinemas;
        }
    }
}
