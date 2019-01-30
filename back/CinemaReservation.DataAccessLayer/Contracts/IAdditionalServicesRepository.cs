using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdditionalServicesRepository
    {
        Task<AddOperationResultStatus> UpsertAdditionalServiceAsync(AdditionalServiceEntity additionalServiceEntity);
        Task<List<NameIdEntity>> GetServiceOptionsAsync();
    }
}
