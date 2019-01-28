using System;
using System.IO;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Microsoft.Extensions.Configuration;

namespace CinemaReservation.BusinessLayer.Services
{
    public class FilmService: IFilmService
    {
        private IFilmRepository _filmRepository;
        private IConfiguration _configuration;

        public FilmService(
            IFilmRepository filmRepository,
            IConfiguration configuration
        )
        {
            _filmRepository = filmRepository;
            _configuration = configuration;
        }


        public async Task<UpsertItemResultStatusAndId> AddFilmAsync(FilmModel filmModel)
        {
            AddOperationResultEntity resultEntity = await _filmRepository.UpsertFilmAsync(new FilmEntity(
                filmModel.Title,
                filmModel.Release,
                filmModel.Description,
                filmModel.StartShowingDate,
                filmModel.FinishShowingDate
            ));

            if (resultEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return new UpsertItemResultStatusAndId(
                    resultEntity.Id,
                    UpsertItemResultStatus.Ok
                );
            }

            return new UpsertItemResultStatusAndId(UpsertItemResultStatus.Conflict);
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

            AddOperationResultEntity resultEntity = await _filmRepository.InsertFilmPosterAsync(
                new FilmPosterEntity(
                    imageModel.TargetId,
                    posterUniqueId
                )
            );

            if (resultEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return UpsertItemResultStatus.Ok;
            }

            return UpsertItemResultStatus.Conflict;
        }
    }
}
