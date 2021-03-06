﻿using Microsoft.Extensions.DependencyInjection;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Repositories;

namespace CinemaReservation.DataAccessLayer
{
    public static class DalServices
    {
        public static void AddServices (IServiceCollection services)
        {
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<IDalSettings, DalSettings>();
            services.AddSingleton<IFilmRepository, FilmRepository>();
            services.AddSingleton<IHallRepository, HallRepository>();
            services.AddSingleton<ICinemaRepository, CinemaRepository>();
            services.AddSingleton<ICityRepository, CityRepository>();
            services.AddSingleton<ISeanceRepository, SeanceRepository>();
            services.AddSingleton<ISeatTypeRepository, SeatTypeRepository>();
            services.AddSingleton<IAdditionalServiceRepository, AdditionalServiceRepository>();
        }
    }
}
