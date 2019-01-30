using CinemaReservation.BusinessLayer.Models;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAdditionalServicesService
    {
        Task<UpsertItemResultStatus> AddAdditionalServiceAsync(ServiceModel serviceModel);
    }
}
