namespace CinemaReservation.BusinessLayer.Models
{
    public class FilmResultModel
    {
        public int Id { get; }
        public UpsertItemResultStatus UpsertFilmResultStatus { get; }

        public FilmResultModel(
            int id,
            UpsertItemResultStatus upsertFilmResultStatus
        )
        {
            Id = id;
            UpsertFilmResultStatus = upsertFilmResultStatus;
        }

        public FilmResultModel(
            UpsertItemResultStatus upsertFilmResultStatus
        )
        {
            UpsertFilmResultStatus = upsertFilmResultStatus;
        }
    }
}
