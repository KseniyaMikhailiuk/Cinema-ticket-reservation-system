namespace CinemaReservation.Web.Models
{
    public class GetFilmNamesRequest
    {
        public string Filter { get; }

        public GetFilmNamesRequest(
            string filter
        )
        {
            Filter = filter;
        }
    }
}
