namespace CinemaReservation.BusinessLayer.Models
{
    public class CinemaResultModel
    {
        public int Id { get; }
        public UpsertItemResultStatus UpsertCinemaResultStatus { get; }

        public CinemaResultModel(
            int id,
            UpsertItemResultStatus upsertCinemaResultStatus
        )
        {
            Id = id;
            UpsertCinemaResultStatus = upsertCinemaResultStatus;
        }

        public CinemaResultModel(
            UpsertItemResultStatus upsertCinemaResultStatus
        )
        {
            UpsertCinemaResultStatus = upsertCinemaResultStatus;
        }
    }
}
