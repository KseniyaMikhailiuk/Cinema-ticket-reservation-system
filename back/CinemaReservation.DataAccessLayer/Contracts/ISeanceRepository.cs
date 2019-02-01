using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ISeanceRepository
    {
        Task<AddOperationResultEntity> UpsertSeanceAsync(SeanceEntity seanceEntity);
        Task<AddOperationResultStatus> AddSeanceAdditionalServicesAsync(List<PriceEntity> seanceServices);
        Task<AddOperationResultStatus> AddSeanceSeatPricesAsync(List<PriceEntity> seanceServices);
    }
}
