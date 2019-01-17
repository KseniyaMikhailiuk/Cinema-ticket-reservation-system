using Microsoft.Extensions.Configuration;
using CinemaReservation.DataAccessLayer.Contracts;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class DalSettings: IDalSettings
    {
        public string ConnectionString { get; }

        private IConfiguration _configuration;

        public DalSettings(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetSection("ConnectionString:DefaultConnection").Value;
        }
    }
}
