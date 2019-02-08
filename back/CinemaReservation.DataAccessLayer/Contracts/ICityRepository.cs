﻿using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ICityRepository
    {
        Task<int> UpsertCityAsync(CityEntity cityEntity);
        Task<IReadOnlyCollection<OptionNameIdEntity>> GetCitiesAsync();
    }
}
