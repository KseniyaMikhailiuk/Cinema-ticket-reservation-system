namespace CinemaReservation.DataAccessLayer.Entities
{
    public class HallResultEntity
    {
        public int Id { get; }
        public OperationResultStatus OperationResultStatus { get; }

        public HallResultEntity(
            int id,
            OperationResultStatus operationResultStatus
        )
        {
            Id = id;
            OperationResultStatus = operationResultStatus;
        }

        public HallResultEntity(
            OperationResultStatus operationResultStatus
        )
        {
            OperationResultStatus = operationResultStatus;
        }
    }
}
