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

        public async Task<UpsertItemResultStatus> AddHallsAsync(HallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                List<SeatModel> hallSeats = hallsModel
                    .Seats
                    .FindAll(seat => seat.HallId == hall.Id);

                AddOperationResultEntity hallEntity = await _hallRepository.UpsertHallAsync(
                    new HallEntity(
                        hall.Name,
                        hallsModel.CinemaId
                    )
                );

                if (hallEntity.OperationResultStatus == AddOperationResultStatus.UniqueIndexError)
                {
                    return UpsertItemResultStatus.Conflict;
                }

                List<SeatEntity> seatEntities = new List<SeatEntity>();

                foreach (SeatModel seat in hallSeats)
                {
                    seatEntities.Add(
                        new SeatEntity(
                            seat.Type,
                            seat.Raw,
                            seat.Line,
                            hallEntity.Id
                        )
                    );
                }

                await _hallRepository.AddHallPlanAsync(seatEntities);
            }

            return UpsertItemResultStatus.Ok;
        }

        public async Task<UpsertItemResultStatus> EditHallsAsync(HallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                List<SeatModel> hallSeats = hallsModel
                    .Seats
                    .FindAll(seat => seat.HallId == hall.Id);

                AddOperationResultEntity hallEntity = await _hallRepository.UpsertHallAsync(
                    new HallEntity(
                        hall.Id,
                        hall.Name,
                        hallsModel.CinemaId
                    )
                );

                if (hallEntity.OperationResultStatus == AddOperationResultStatus.UniqueIndexError)
                {
                    return UpsertItemResultStatus.Conflict;
                }

                List<SeatEntity> seatEntities = new List<SeatEntity>();

                foreach (SeatModel seat in hallSeats)
                {
                    seatEntities.Add(
                        new SeatEntity(
                            seat.Type,
                            seat.Raw,
                            seat.Line,
                            hallEntity.Id
                        )
                    );
                }

                await _hallRepository.RemoveHallPlanAsync(hallEntity.Id);

                await _hallRepository.AddHallPlanAsync(seatEntities);
            }

            return UpsertItemResultStatus.Ok;
        }
    }
}
