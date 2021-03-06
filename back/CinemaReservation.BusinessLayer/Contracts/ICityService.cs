﻿using CinemaReservation.BusinessLayer.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ICityService
    {
        Task<int> UpsertCityAsync(CityModel cityModel);
        Task<IReadOnlyCollection<CityModel>> GetCitiesAsync();
        Task<bool> CheckId(int id);
    }
}
