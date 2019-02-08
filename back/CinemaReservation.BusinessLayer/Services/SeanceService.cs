using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Exceptions;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.DataAccessLayer.Exceptions;
using Mapster;

namespace CinemaReservation.BusinessLayer.Services
{
    public class SeanceService: ISeanceService
    {
        private ISeanceRepository _seanceRepository;

        public SeanceService(
            ISeanceRepository seanceRepository
        )
        {
            _seanceRepository = seanceRepository;
        }

        public async Task UpsertSeanceAsync(SeanceModel seanceModel)
        {
            try
            {
                using (OperationContext context = _seanceRepository.GetOperationContext())
                {
                    int id = await _seanceRepository.UpsertSeanceAsync(
                        seanceModel.Adapt<SeanceEntity>(),
                        context
                    );

                    TypeAdapterConfig<SeatPriceModel, SeatPriceEntity>
                        .NewConfig()
                        .Map(dest => dest.SeanceId, sourse => id);

                    await _seanceRepository.AddSeanceSeatPricesAsync(
                        seanceModel
                            .SeatPrices
                            .Adapt<IReadOnlyCollection<SeatPriceEntity>>(),
                        context
                    );

                    TypeAdapterConfig<ServicePriceModel, ServicePriceEntity>
                        .NewConfig()
                        .Map(dest => dest.SeanceId, sourse => id);

                    await _seanceRepository.AddSeanceAdditionalServicesAsync(
                        seanceModel
                            .Services
                            .Adapt<IReadOnlyCollection<ServicePriceEntity>>(),
                        context
                    );

                    context.Apply();
                }
            }
            catch (UniqueIndexException e)
            {
                throw new ConflictException(e);
            }
        }
    }
}
