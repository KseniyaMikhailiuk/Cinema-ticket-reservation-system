namespace CinemaReservation.DataAccessLayer.Entities
{
    public class AddOperationResultEntity
    {
        public int Id { get; }
        public AddOperationResultStatus OperationResultStatus { get; }

        public AddOperationResultEntity(
            int id,
            AddOperationResultStatus operationResultStatus
        )
        {
            Id = id;
            OperationResultStatus = operationResultStatus;
        }

        public AddOperationResultEntity(
            AddOperationResultStatus operationResultStatus
        )
        {
            OperationResultStatus = operationResultStatus;
        }
    }
}
