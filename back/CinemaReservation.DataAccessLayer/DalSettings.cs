using Microsoft.Extensions.Configuration;
using CinemaReservation.DataAccessLayer.Contracts;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class DalSettings: IDalSettings
    {
        IConfiguration _configuration;
        public DalSettings(IConfiguration configuration)
        {
            _configuration = configuration;
            ConnectionString = _configuration.GetConnectionString("DefaultConnection");
        }
        public string ConnectionString { get; set; }
    }
}
