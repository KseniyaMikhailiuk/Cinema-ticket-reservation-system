namespace CinemaReservation.Web.Models
{
    public class CinemaOptionsResponse
    {
        public OptionItem[] Cities { get; }
        public OptionItem[] Cinemas { get; }

        public CinemaOptionsResponse(
            OptionItem[] cities,
            OptionItem[] cinemas
        )
        {
            Cities = cities;
            Cinemas = cinemas;
        }
    }
}
