using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdditionalServiceRepository
    {
        Task<AddOperationResultStatus> UpsertAdditionalServiceAsync(AdditionalServiceEntity additionalServiceEntity);
        Task<List<OptionNameIdEntity>> GetServiceOptionsAsync();
    }
}
