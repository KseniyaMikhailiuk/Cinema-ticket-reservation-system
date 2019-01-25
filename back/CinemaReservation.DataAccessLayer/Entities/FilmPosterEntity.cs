namespace CinemaReservation.DataAccessLayer.Entities
{
    public class FilmPosterEntity
    {
        public string PosterUnuqueId { get; }
        public int FilmId { get; }

        public FilmPosterEntity(
            int filmId,
            string posterUniqueId
        )
        {
            FilmId = filmId;
            PosterUnuqueId = posterUniqueId;
        }
    }
}
