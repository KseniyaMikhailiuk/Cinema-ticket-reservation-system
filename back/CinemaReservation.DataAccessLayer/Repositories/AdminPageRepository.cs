using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    class AdminPageRepository: IAdminPageRepository
    {
        private readonly IDalSettings _settings;


        public AdminPageRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<int> AddCinemaAsync(CinemaEntity cinemaEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                return await dbConnection.QuerySingleOrDefaultAsync<int>(
                    "AddCinema",
                    cinemaEntity,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task<int> AddHallAsync(HallEntity hallEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                return await dbConnection.QuerySingleOrDefaultAsync<int>(
                    "AddHall",
                    hallEntity,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task AddHallPlanAsync(List<SeatEntity> seats)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                await dbConnection.ExecuteAsync(
                    "AddHallPlan",
                    seats,
                    commandType: CommandType.StoredProcedure
                );
            }
        }
    }
}
