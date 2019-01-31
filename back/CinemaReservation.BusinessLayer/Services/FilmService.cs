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


        public async Task<UpsertItemResultStatusAndId> AddFilmAsync(FilmModel filmModel)
        {
            AddOperationResultEntity resultEntity = await _filmRepository.UpsertFilmAsync(new FilmEntity(
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
            string posterUniqueId = Guid.NewGuid().ToString();
            string fileName = imageModel.FormFile.FileName;
            string path = _configuration.GetSection("ImagesPath:FilmPosters").Value
                + "/"
                + posterUniqueId
                + fileName.Substring(fileName.IndexOf("."));

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

        public async Task<List<FilterOptionModel>> GetFilmOptionsAsync()
        {
            List<NameIdEntity> films = await _filmRepository.GetFilmOptionsAsync();

            return GetOptionListFromArray(films);
        }

        private List<FilterOptionModel> GetOptionListFromArray(List<NameIdEntity> entities)
        {
            List<FilterOptionModel> list = new List<FilterOptionModel>();

            foreach (NameIdEntity item in entities)
            {
                list.Add(
                    new FilterOptionModel(
                        item.Name,
                        item.Id,
                        item.ParentId
                    )
                );
            }

            return list;
        }
    }
}
