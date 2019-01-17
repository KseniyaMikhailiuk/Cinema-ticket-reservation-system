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
        }
    }
}
