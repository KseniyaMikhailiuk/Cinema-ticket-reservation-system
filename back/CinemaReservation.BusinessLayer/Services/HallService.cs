using System.Threading.Tasks;
using System.Collections.Generic;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;

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

        public async Task<UpsertItemResultStatus> UpsertHallsAsync(HallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                AddOperationResultEntity hallResultEntity = await _hallRepository.UpsertHallAsync(
                    new HallEntity(
                        hall.Id,
                        hall.Name,
                        hallsModel.CinemaId
                    )
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

                await _hallRepository.AddHallPlanAsync(
                    hallSeats
                        .GetSeatEntityListFromModelList(
                            hallResultEntity.Id
                        )
                );
            }

            return UpsertItemResultStatus.Ok;
        }

        public async Task<List<FilterOptionModel>> GetHallsOptionsAsync()
        {
            List<NameIdEntity> halls = await _hallRepository.GetHallsAsync();

            return halls.GetOptionModelListFromEntityArray();
        }
    }
}
