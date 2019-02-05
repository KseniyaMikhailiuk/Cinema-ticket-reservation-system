﻿using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using Mapster;

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

        public async Task<UpsertItemResultStatus> UpsertAdditionalServiceAsync(ServiceModel serviceModel)
        {
            AddOperationResultStatus result = await _additionalServicesRepository
                .UpsertAdditionalServiceAsync(
                    serviceModel.Adapt<AdditionalServiceEntity>()
                );

            if (result == AddOperationResultStatus.Ok)
            {
                return UpsertItemResultStatus.Ok;
            }

            return UpsertItemResultStatus.Conflict;
        }
        public async Task<List<OptionModel>> GetServiceOptionsAsync()
        {
            List<OptionNameIdEntity> services = await _additionalServicesRepository.GetServiceOptionsAsync();

            return services.Adapt<List<OptionModel>>();
        }
    }
}
