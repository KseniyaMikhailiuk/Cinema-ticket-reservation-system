using CinemaReservation.BusinessLayer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAdditionalServiceService
    {
        Task UpsertAdditionalServiceAsync(ServiceModel serviceModel);
        Task<IReadOnlyCollection<ServiceModel>> GetServiceOptionsAsync();
    }
}
