using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ISeanceRepository
    {
        Task<int> UpsertSeanceAsync(SeanceEntity seanceEntity, OperationContext context);
        Task AddSeanceAdditionalServicesAsync(List<ServicePriceEntity> seanceServices, OperationContext context);
        Task AddSeanceSeatPricesAsync(List<SeatPriceEntity> seanceServices, OperationContext context);
        OperationContext GetOperationContext();
    }
}
