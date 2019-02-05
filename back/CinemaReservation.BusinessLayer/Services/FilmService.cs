using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;

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


        public async Task<UpsertItemResultStatusAndId> UpsertFilmAsync(FilmModel filmModel)
        {
            if (filmModel.FinishShowingDate < filmModel.StartShowingDate)
            {
                return new UpsertItemResultStatusAndId(UpsertItemResultStatus.Conflict);
            }

            AddOperationResultEntity resultEntity = await _filmRepository.UpsertFilmAsync(new FilmEntity(
                filmModel.Id,
                filmModel.Title,
                filmModel.Release,
                filmModel.Description,
                filmModel.StartShowingDate,
                filmModel.FinishShowingDate,
                filmModel.FilmDuration
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


        public async Task<UpsertItemResultStatus> AddFilmPosterAsync(FilmPosterModel imageModel)
        {
            string posterUniqueId = Guid.NewGuid().ToString() + Path.GetExtension(imageModel.FormFile.FileName);
            string path = Path.Combine(_configuration.GetSection("FilmPostersPath").Value, posterUniqueId);

            if (imageModel.FormFile != null && imageModel.FormFile.Length > 0)
            {
                using (FileStream stream = new FileStream(path, FileMode.Create))
                {
                    await imageModel.FormFile.CopyToAsync(stream);
                }
            }

            AddOperationResultEntity resultEntity = await _filmRepository.InsertFilmPosterAsync(
                new FilmPosterEntity(
                    imageModel.FilmId,
                    posterUniqueId
                )
            );

            if (resultEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return UpsertItemResultStatus.Ok;
            }

            return UpsertItemResultStatus.Conflict;
        }

        public async Task<List<OptionModel>> GetFilmOptionsAsync()
        {
            List<OptionNameIdEntity> films = await _filmRepository.GetFilmOptionsAsync();

            return films.GetOptionModelList();
        }
    }
}
