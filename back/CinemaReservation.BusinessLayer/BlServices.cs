using Microsoft.Extensions.DependencyInjection;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Services;

namespace CinemaReservation.BusinessLayer
{
    public static class BlServices
    {
        public static void AddServices(IServiceCollection services)
        {
            services.AddSingleton<IAccountService, AccountService>();
            services.AddSingleton<ISecurityService, SecurityService>();
            services.AddSingleton<IFilmService, FilmService>();
            services.AddSingleton<IHallService, HallService>();
            services.AddSingleton<ICinemaService, CinemaService>();
            services.AddSingleton<ICityService, CityService>();
            services.AddSingleton<ISeanceService, SeanceService>();
            services.AddSingleton<IAdditionalServiceService, AdditionalServiceService>();
            services.AddSingleton<ISeatTypesService, SeatTypeService>();
        }
    }
}
