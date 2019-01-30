using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Services
{
    public class AdditionalServicesService: IAdditionalServicesService
    {
        private IAdditionalServicesRepository _additionalServicesRepository;

        public AdditionalServicesService(
            IAdditionalServicesRepository additionalServicesRepository
        )
        {
            _additionalServicesRepository = additionalServicesRepository;
        }

        public async Task<UpsertItemResultStatus> AddAdditionalServiceAsync(ServiceModel serviceModel)
        {
            AddOperationResultStatus result = await _additionalServicesRepository.UpsertAdditionalServiceAsync(new AdditionalServiceEntity(
                serviceModel.Name
            ));

            if (result == AddOperationResultStatus.Ok)
            {
                return UpsertItemResultStatus.Ok;
            }

            return UpsertItemResultStatus.Conflict;
        }
    }
}
