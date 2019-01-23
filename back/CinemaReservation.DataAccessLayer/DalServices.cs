using Microsoft.Extensions.DependencyInjection;
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
            services.AddSingleton<IAdminPageRepository, AdminPageRepository>();
        }
    }
}
