using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ISeanceRepository
    {
        Task<int> UpsertSeanceAsync(SeanceEntity seanceEntity, OperationContext context);
        Task<AddOperationResultStatus> AddSeanceAdditionalServicesAsync(List<ServicePriceEntity> seanceServices, OperationContext context);
        Task<AddOperationResultStatus> AddSeanceSeatPricesAsync(List<SeatPriceEntity> seanceServices, OperationContext context);
        OperationContext GetOperationContext();
    }
}
