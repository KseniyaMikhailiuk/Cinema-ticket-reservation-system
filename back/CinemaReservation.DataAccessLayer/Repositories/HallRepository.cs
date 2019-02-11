using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.DataAccessLayer.Exceptions;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class HallRepository: IHallRepository
    {
        private readonly IDalSettings _settings;

        public HallRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }


        public async Task<int> UpsertHallAsync(HallEntity hallEntity)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    int hallId = await dbConnection.QuerySingleOrDefaultAsync<int>(
                        "UpsertHall",
                        hallEntity,
                        commandType: CommandType.StoredProcedure
                    );

                    return hallId;
                }
            }
            catch(SqlException e)
            {
                throw new UniqueIndexException("UpsertHall", e);
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

        public async Task DeleteHallPlanAsync(int hallId)
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

        public async Task<IReadOnlyCollection<HallEntity>> GetHallsAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                IReadOnlyCollection<HallEntity> nameIdEntity =
                    (IReadOnlyCollection<HallEntity>)await dbConnection.QueryAsync<HallEntity>(
                        "GetHalls",
                        commandType: CommandType.StoredProcedure
                    );

                return nameIdEntity;
            }
        }
    }
}
