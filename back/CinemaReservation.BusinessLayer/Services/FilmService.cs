using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using Mapster;

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


        public async Task<int> UpsertFilmAsync(FilmModel filmModel)
        {
            int result = await _filmRepository.UpsertFilmAsync(
                filmModel.Adapt<FilmEntity>()
            );

            return result;
        }


        public async Task InsertFilmPosterAsync(FilmPosterModel imageModel)
        {
            string filmPosterPath = _configuration.GetSection("FilmPostersPath").Value;

            FilmPosterEntity result = await _filmRepository.GetFilmPosterAsync(imageModel.FilmId);
            File.Delete(Path.Combine(filmPosterPath, result.PosterUniqueId));

            string posterUniqueId = Guid.NewGuid().ToString() + Path.GetExtension(imageModel.FormFile.FileName);
            string path = Path.Combine(filmPosterPath, posterUniqueId);

            if (imageModel.FormFile != null && imageModel.FormFile.Length > 0)
            {
                using (FileStream stream = new FileStream(path, FileMode.Create))
                {
                    await imageModel.FormFile.CopyToAsync(stream);
                }
            }

            await _filmRepository.InsertFilmPosterAsync(
                new FilmPosterEntity(
                    imageModel.FilmId,
                    posterUniqueId
                )
            );
        }

        public async Task<List<OptionModel>> GetFilmNamesAsync(string filter)
        {
            List<FilmEntity> films = await _filmRepository.GetFilmsAsync(filter);

            TypeAdapterConfig<FilmEntity, OptionModel>
                .NewConfig()
                .Map(dest => dest.Id, sourse => sourse.Id)
                .Map(dest => dest.Name, sourse => sourse.Title)
                .IgnoreNonMapped(true);

            return films.Adapt<List<OptionModel>>();
        }
    }
}
