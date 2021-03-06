﻿using System;
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

            if (result.PosterUniqueId != null)
            {
                File.Delete(Path.Combine(filmPosterPath, result.PosterUniqueId));
            }

            string posterUniqueId = Guid.NewGuid().ToString();
            string posterExtension = Path.GetExtension(imageModel.FormFile.FileName);
            string path = Path.Combine(filmPosterPath, posterUniqueId + posterExtension);

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
                    posterUniqueId,
                    posterExtension

                )
            );
        }

        public async Task<IReadOnlyCollection<FilmModel>> GetFilmsAsync(string filter)
        {
            IReadOnlyCollection<FilmEntity> films = await _filmRepository.GetFilmsByFilterAsync(filter);

            return films.Adapt<IReadOnlyCollection<FilmModel>>();
        }

        public async Task<bool> CheckId(int id)
        {
            return await _filmRepository.CheckId(id);
        }
    }
}
