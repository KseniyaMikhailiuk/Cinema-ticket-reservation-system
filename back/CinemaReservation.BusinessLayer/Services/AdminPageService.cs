using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.BusinessLayer.Services
{
    public class AdminPageService: IAdminPageService
    {
        private IAdminPageRepository _adminPageRepository;

        public AdminPageService(
            IAdminPageRepository adminPageRepository
        )
        {
            _adminPageRepository = adminPageRepository;
        }

        public async Task<CinemaResultModel> AddCinemaAsync(CinemaModel cinemaModel)
        {
            CinemaResultEntity cinemaEntity = await _adminPageRepository.UpsertCinemaAsync(
                new CinemaEntity(
                    cinemaModel.Name,
                    cinemaModel.City
                )
            );

            if (cinemaEntity.OperationResultStatus == OperationResultStatus.Ok)
            {
                return new CinemaResultModel(
                    cinemaModel.Name,
                    cinemaModel.City,
                    cinemaEntity.Id,
                    UpsertCinemaResultStatus.Ok
                );
            }

            return new CinemaResultModel(UpsertCinemaResultStatus.CityCinemaCombinationExists);
        }

        public async Task<CinemaResultModel> EditCinemaAsync(CinemaModel cinemaModel)
        {

            CinemaResultEntity cinemaEntity = await _adminPageRepository.UpsertCinemaAsync(
                new CinemaEntity(
                    cinemaModel.Id,
                    cinemaModel.Name,
                    cinemaModel.City
                )
            );

            if (cinemaEntity.OperationResultStatus == OperationResultStatus.Ok)
            {
                return new CinemaResultModel(
                    cinemaModel.Name,
                    cinemaModel.City,
                    cinemaEntity.Id,
                    UpsertCinemaResultStatus.Ok
                );
            }

            return new CinemaResultModel(
                UpsertCinemaResultStatus.CityCinemaCombinationExists
            );
        }

        public async Task<UpsertHallResultStatus> AddHallsAsync(HallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                List<SeatModel> hallSeats = hallsModel
                    .Seats
                    .FindAll(seat => seat.HallId == hall.Id);

                HallResultEntity hallEntity = await _adminPageRepository.UpsertHallAsync(
                    new HallEntity(
                        hall.Name,
                        hallsModel.CinemaId
                    )
                );

                if (hallEntity.OperationResultStatus == OperationResultStatus.UniqueIndexError)
                {
                    return UpsertHallResultStatus.HallCinemaCombinationExists;
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

                await _adminPageRepository.AddHallPlanAsync(seatEntities);
            }

            return UpsertHallResultStatus.Ok;
        }

        public async Task<UpsertHallResultStatus> EditHallsAsync(HallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                List<SeatModel> hallSeats = hallsModel
                    .Seats
                    .FindAll(seat => seat.HallId == hall.Id);

                HallResultEntity hallEntity = await _adminPageRepository.UpsertHallAsync(
                    new HallEntity(
                        hall.Id,
                        hall.Name,
                        hallsModel.CinemaId
                    )
                );

                if (hallEntity.OperationResultStatus == OperationResultStatus.UniqueIndexError)
                {
                    return UpsertHallResultStatus.HallCinemaCombinationExists;
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

                await _adminPageRepository.RemoveHallPlanAsync(hallEntity.Id);

                await _adminPageRepository.AddHallPlanAsync(seatEntities);
            }

            return UpsertHallResultStatus.Ok;
        }
    }
}
