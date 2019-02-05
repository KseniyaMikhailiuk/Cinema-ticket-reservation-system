using System.Collections.Generic;
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
            AddOperationResultEntity resultEntity = await _seanceRepository.UpsertSeanceAsync(new SeanceEntity(
                seanceModel.Id,
                seanceModel.DateTime,
                seanceModel.FilmId,
                seanceModel.HallId
            ));

            if (resultEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                TypeAdapterConfig<SeatPriceModel, SeatPriceEntity>
                    .NewConfig()
                    .Map(dest => dest.SeanceId, sourse => resultEntity.Id);

                AddOperationResultStatus addSeatPricesResultStatus = await _seanceRepository.AddSeanceSeatPricesAsync(
                        seanceModel
                            .SeatPrices
                            .Adapt<List<SeatPriceEntity>>()
                );

                if (addSeatPricesResultStatus == AddOperationResultStatus.Ok)
                {
                    TypeAdapterConfig<SeatPriceModel, ServicePriceEntity>
                        .NewConfig()
                        .Map(dest => dest.SeanceId, sourse => resultEntity.Id);

                    AddOperationResultStatus addServicesResultStatus = await _seanceRepository.AddSeanceAdditionalServicesAsync(
                        seanceModel
                            .Services
                            .Adapt<List<ServicePriceEntity>>()
                    );

                    if (addServicesResultStatus == AddOperationResultStatus.Ok)
                    {
                        return UpsertItemResultStatus.Ok;
                    }
                }
            }

            return UpsertItemResultStatus.Conflict;
        }
    }
}
