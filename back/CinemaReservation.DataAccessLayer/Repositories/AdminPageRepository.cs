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

        public async Task<int> UpsertCinemaAsync(CinemaEntity cinemaEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                return await dbConnection.QuerySingleOrDefaultAsync<int>(
                    "UpsertCinema",
                    cinemaEntity,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task<int> UpsertHallAsync(HallEntity hallEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                return await dbConnection.QuerySingleOrDefaultAsync<int>(
                    "UpsertHall",
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
                    "AddSeats",
                    seats,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task RemoveHallPlanAsync(int hallId)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                await dbConnection.ExecuteAsync(
                    "RemoveSeats",
                    new { HallId = hallId },
                    commandType: CommandType.StoredProcedure
                );
            }
        }
    }
}
