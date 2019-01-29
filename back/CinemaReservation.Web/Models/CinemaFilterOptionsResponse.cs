namespace CinemaReservation.Web.Models
{
    public class CinemaFilterOptionsResponse
    {
        public FilterOptionItem[] Cities { get; }
        public FilterOptionItem[] Cinemas { get; }
        public FilterOptionItem[] Halls { get; }

        public CinemaFilterOptionsResponse(
            FilterOptionItem[] cities,
            FilterOptionItem[] cinemas,
            FilterOptionItem[] halls
        )
        {
            Cities = cities;
            Cinemas = cinemas;
            Halls = halls;
        }
    }
}
