namespace CinemaReservation.BusinessLayer.Models
{
    public class UpsertItemResultStatusAndId
    {
        public int Id { get; }
        public UpsertItemResultStatus UpsertItemResultStatus { get; }

        public UpsertItemResultStatusAndId(
            int id,
            UpsertItemResultStatus upsertItemResultStatus
        )
        {
            Id = id;
            UpsertItemResultStatus = upsertItemResultStatus;
        }

        public UpsertItemResultStatusAndId(
            UpsertItemResultStatus upsertItemResultStatus
        )
        {
            UpsertItemResultStatus = upsertItemResultStatus;
        }
    }
}
