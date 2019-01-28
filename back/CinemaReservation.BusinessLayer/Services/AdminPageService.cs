using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Microsoft.Extensions.Configuration;

namespace CinemaReservation.BusinessLayer.Services
{
    public class AdminPageService: IAdminPageService
    {
        private IAdminPageRepository _adminPageRepository;
        private IConfiguration _configuration;

        public AdminPageService(
            IAdminPageRepository adminPageRepository,
            IConfiguration configuration
        )
        {
            _adminPageRepository = adminPageRepository;
            _configuration = configuration;
        }

        public async Task<CinemaResultModel> AddCinemaAsync(CinemaModel cinemaModel)
        {
            AddOperationResultEntity cinemaEntity = await _adminPageRepository.UpsertCinemaAsync(
                new CinemaEntity(
                    cinemaModel.Name,
                    cinemaModel.City
                )
            );

            if (cinemaEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return new CinemaResultModel(
                    cinemaEntity.Id,
                    UpsertItemResultStatus.Ok
                );
            }

            return new CinemaResultModel(UpsertItemResultStatus.Conflict);
        }

        public async Task<CinemaResultModel> EditCinemaAsync(CinemaModel cinemaModel)
        {
            AddOperationResultEntity cinemaEntity = await _adminPageRepository.UpsertCinemaAsync(
                new CinemaEntity(
                    cinemaModel.Id,
                    cinemaModel.Name,
                    cinemaModel.City
                )
            );

            if (cinemaEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return new CinemaResultModel(
                    cinemaEntity.Id,
                    UpsertItemResultStatus.Ok
                );
            }

            return new CinemaResultModel(
                UpsertItemResultStatus.Conflict
            );
        }

        public async Task<UpsertItemResultStatus> AddHallsAsync(HallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                List<SeatModel> hallSeats = hallsModel
                    .Seats
                    .FindAll(seat => seat.HallId == hall.Id);

                AddOperationResultEntity hallEntity = await _adminPageRepository.UpsertHallAsync(
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

                await _adminPageRepository.AddHallPlanAsync(seatEntities);
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

                AddOperationResultEntity hallEntity = await _adminPageRepository.UpsertHallAsync(
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

                await _adminPageRepository.RemoveHallPlanAsync(hallEntity.Id);

                await _adminPageRepository.AddHallPlanAsync(seatEntities);
            }

            return UpsertItemResultStatus.Ok;
        }

        public async Task<FilmResultModel> AddFilmAsync(FilmModel filmModel)
        {
            AddOperationResultEntity filmResultEntity = await  _adminPageRepository.UpsertFilmAsync(new FilmEntity(
                filmModel.Title,
                filmModel.Release,
                filmModel.Description,
                filmModel.StartShowingDate,
                filmModel.FinishShowingDate
            ));

            if (filmResultEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return new FilmResultModel(
                    filmResultEntity.Id,
                    UpsertItemResultStatus.Ok
                );
            }

            return new FilmResultModel(UpsertItemResultStatus.Conflict);
        }

        public async Task<UpsertItemResultStatus> AddFilmPosterAsync(ImageModel imageModel)
        {
            string posterUniqueId = Guid.NewGuid().ToString();
            string path = _configuration.GetSection("ImagesPath:FilmPosters").Value + "/" + posterUniqueId;

            if (imageModel.FormFile != null && imageModel.FormFile.Length > 0)
            {
                using (FileStream stream = new FileStream(path, FileMode.Create))
                {
                    await imageModel.FormFile.CopyToAsync(stream);
                }
            }

            FilmPosterEntity filmPosterEntity = new FilmPosterEntity(imageModel.TargetId, posterUniqueId);

            AddOperationResultEntity resultEntity = await _adminPageRepository.UpsertFilmPosterAsync(filmPosterEntity);

            if (resultEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return UpsertItemResultStatus.Ok;
            }

            return UpsertItemResultStatus.Conflict;
        }
    }
}
