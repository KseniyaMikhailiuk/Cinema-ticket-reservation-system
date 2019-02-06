using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using Mapster;
using CinemaReservation.DataAccessLayer.Exceptions;
using CinemaReservation.BusinessLayer.Exceptions;

namespace CinemaReservation.BusinessLayer.Services
{
    public class AdditionalServiceService: IAdditionalServiceService
    {
        private IAdditionalServiceRepository _additionalServicesRepository;

        public AdditionalServiceService(
            IAdditionalServiceRepository additionalServicesRepository
        )
        {
            _additionalServicesRepository = additionalServicesRepository;
        }

        public async Task UpsertAdditionalServiceAsync(ServiceModel serviceModel)
        {
            try
            {
                await _additionalServicesRepository
                    .UpsertAdditionalServiceAsync(
                        serviceModel.Adapt<AdditionalServiceEntity>()
                    );
            }
            catch(UniqueIndexException e)
            {
                throw new ConflictException(e);
            }
        }
        public async Task<List<OptionModel>> GetServiceOptionsAsync()
        {
            List<OptionNameIdEntity> services = await _additionalServicesRepository.GetServiceOptionsAsync();

            return services.Adapt<List<OptionModel>>();
        }
    }
}
