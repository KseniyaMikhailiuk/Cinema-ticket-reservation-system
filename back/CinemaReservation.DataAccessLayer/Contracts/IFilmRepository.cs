﻿using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface IFilmRepository
    {
        Task<int> UpsertFilmAsync(FilmEntity filmEntity);
        Task InsertFilmPosterAsync(FilmPosterEntity filmPosterEntity);
        Task<List<FullFilmEntity>> GetFilmsByNameAsync(string filter);
        Task<FullFilmEntity> GetFilmAsync(int id);
        Task<FilmPosterEntity> GetFilmPosterAsync(int id);
    }
}
