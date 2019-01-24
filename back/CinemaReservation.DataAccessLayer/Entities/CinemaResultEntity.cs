namespace CinemaReservation.DataAccessLayer.Entities
{
    public class CinemaResultEntity
    {
        public int Id { get; }
        public OperationResultStatus OperationResultStatus { get; }

        public CinemaResultEntity(
            int id,
            OperationResultStatus operationResultStatus
        )
        {
            Id = id;
            OperationResultStatus = operationResultStatus;
        }

        public CinemaResultEntity(
            OperationResultStatus operationResultStatus
        )
        {
            OperationResultStatus = operationResultStatus;
        }
    }
}
