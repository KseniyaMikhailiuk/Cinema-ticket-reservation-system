using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
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

        public async Task<UpsertItemResultStatus> UpsertSeanceAsync(SeanceModel seanceModel)
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

                AddOperationResultStatus addSeatPricesResultStatus = await _seanceRepository.AddSeanceSeatPricesAsync(
                    seanceModel
                        .SeatPrices
                        .Adapt<List<SeatPriceEntity>>(),
                    context
                );

                if (addSeatPricesResultStatus == AddOperationResultStatus.Ok)
                {
                    TypeAdapterConfig<SeatPriceModel, ServicePriceEntity>
                        .NewConfig()
                        .Map(dest => dest.SeanceId, sourse => id);

                    AddOperationResultStatus addServicesResultStatus = await _seanceRepository.AddSeanceAdditionalServicesAsync(
                        seanceModel
                            .Services
                            .Adapt<List<ServicePriceEntity>>(),
                        context
                    );

                    if (addServicesResultStatus == AddOperationResultStatus.Ok)
                    {
                        context.Apply();
                        return UpsertItemResultStatus.Ok;
                    }
                }
            }

            return UpsertItemResultStatus.Conflict;
        }
    }
}
