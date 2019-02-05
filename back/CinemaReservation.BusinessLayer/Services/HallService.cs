using System.Threading.Tasks;
using System.Collections.Generic;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using Mapster;

namespace CinemaReservation.BusinessLayer.Services
{
    public class HallService: IHallService
    {
        private IHallRepository _hallRepository;

        public HallService(
            IHallRepository hallRepository
        )
        {
            _hallRepository = hallRepository;
        }

        public async Task<UpsertItemResultStatus> UpsertHallsAsync(CinemaHallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                AddOperationResultEntity hallResultEntity = await _hallRepository.UpsertHallAsync(
                    hallsModel.Adapt<HallEntity>()
                );

                if (hallResultEntity.OperationResultStatus == AddOperationResultStatus.UniqueIndexError)
                {
                    return UpsertItemResultStatus.Conflict;
                }

                List<SeatModel> hallSeats = hallsModel
                    .Seats
                    .FindAll(seat => seat.HallId == hall.Id);

                if (hall.Id == hallResultEntity.Id)
                {
                    await _hallRepository.RemoveHallPlanAsync(hallResultEntity.Id);
                }

                TypeAdapterConfig<SeatModel, SeatEntity>
                    .NewConfig()
                    .Map(dest => dest.HallId, sourse => hallResultEntity.Id);

                AddOperationResultStatus resultStatus = await _hallRepository.AddHallPlanAsync(
                    hallSeats
                        .Adapt<List<SeatEntity>>()
                );

                if (resultStatus == AddOperationResultStatus.UniqueIndexError)
                {
                    return UpsertItemResultStatus.Conflict;
                }
            }

            return UpsertItemResultStatus.Ok;
        }

        public async Task<List<OptionModel>> GetHallsOptionsAsync()
        {
            List<OptionNameIdEntity> halls = await _hallRepository.GetHallsAsync();

            return halls.Adapt<List<OptionModel>>();
        }
    }
}
