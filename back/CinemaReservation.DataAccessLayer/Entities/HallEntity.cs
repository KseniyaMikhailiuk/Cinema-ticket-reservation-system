namespace CinemaReservation.DataAccessLayer.Entities
{
    public class HallEntity
    {
        public int Id { get; }
        public string Name { get; }
        public int CinemaId { get; }
        public OperationResultStatus OperationResultStatus { get; }

        public HallEntity(
            int id,
            string name,
            int cinemaId
        )
        {
            Id = id;
            Name = name;
            CinemaId = cinemaId;
        }

        public HallEntity(
            string name,
            int cinemaId
        )
        {
            Name = name;
            CinemaId = cinemaId;
        }

        public HallEntity(
            int id,
            OperationResultStatus operationResultStatus
        )
        {
            Id = id;
            OperationResultStatus = operationResultStatus;
        }

        public HallEntity(
            OperationResultStatus operationResultStatus
        )
        {
            OperationResultStatus = operationResultStatus;
        }
    }
}
