namespace CinemaReservation.BusinessLayer.Models
{
    public class CinemaResultModel
    {
        public string Name { get; }
        public string City { get; }
        public int Id { get; }
        public UpsertCinemaResultStatus UpsertCinemaResultStatus { get; }

        public CinemaResultModel(
            string name,
            string city,
            int id,
            UpsertCinemaResultStatus upsertCinemaResultStatus
        )
        {
            Name = name;
            City = city;
            Id = id;
            UpsertCinemaResultStatus = upsertCinemaResultStatus;
        }

        public CinemaResultModel(
            UpsertCinemaResultStatus upsertCinemaResultStatus
        )
        {
            UpsertCinemaResultStatus = upsertCinemaResultStatus;
        }
    }
}
