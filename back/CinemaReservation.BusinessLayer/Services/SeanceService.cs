using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

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

        public async Task<UpsertItemResultStatus> AddSeanceAsync(SeanceModel seanceModel)
        {
            AddOperationResultEntity resultEntity = await _seanceRepository.UpsertSeanceAsync(new SeanceEntity(
                seanceModel.DateTime,
                seanceModel.FilmId,
                seanceModel.HallId
            ));

            if (resultEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                AddOperationResultStatus addSeatPricesResultStatus = await _seanceRepository.AddSeanceSeatPricesAsync(
                    EntityTransformationHelper.GetSeatPriceEntityListFromModelList(
                        seanceModel.SeatPrices,
                        resultEntity.Id
                    )
                );

                if (addSeatPricesResultStatus == AddOperationResultStatus.Ok)
                {
                    AddOperationResultStatus addServicesResultStatus = await _seanceRepository.AddSeanceAdditionalServicesAsync(
                        EntityTransformationHelper.GetSeatPriceEntityListFromModelList(
                            seanceModel.Services,
                            resultEntity.Id
                        )
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
