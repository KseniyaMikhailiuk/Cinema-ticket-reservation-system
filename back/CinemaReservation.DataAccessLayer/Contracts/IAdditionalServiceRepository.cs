using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IAdditionalServiceRepository
    {
        Task UpsertAdditionalServiceAsync(AdditionalServiceEntity additionalServiceEntity);
        Task<IReadOnlyCollection<AdditionalServiceEntity>> GetServicesAsync();
        Task<bool> CheckId(int id);
    }
}
