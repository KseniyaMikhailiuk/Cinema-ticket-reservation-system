using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ISeanceRepository
    {
        Task<int> UpsertSeanceAsync(SeanceEntity seanceEntity, OperationContext context);
        Task AddSeanceAdditionalServicesAsync(IReadOnlyCollection<ServicePriceEntity> seanceServices, OperationContext context);
        Task AddSeanceSeatPricesAsync(IReadOnlyCollection<SeatPriceEntity> seanceServices, OperationContext context);
        OperationContext GetOperationContext();
        Task<bool> CheckId(int id);
    }
}
