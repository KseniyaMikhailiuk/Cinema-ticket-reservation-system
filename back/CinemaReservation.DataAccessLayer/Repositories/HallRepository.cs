using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class HallRepository: IHallRepository
    {
        private readonly IDalSettings _settings;

        public HallRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }


        public async Task<AddOperationResultEntity> UpsertHallAsync(HallEntity hallEntity)
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

                    return new AddOperationResultEntity(hallId, AddOperationResultStatus.Ok);
                }
            }
            catch
            {
                return new AddOperationResultEntity(AddOperationResultStatus.UniqueIndexError);
            }
        }

        public async Task<AddOperationResultStatus> AddHallPlanAsync(List<SeatEntity> seats)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    await dbConnection.ExecuteAsync(
                        "AddSeats",
                        seats,
                        commandType: CommandType.StoredProcedure
                    );

                    return AddOperationResultStatus.Ok;
                }
            }
            catch
            {
                return AddOperationResultStatus.UniqueIndexError;
            }
        }

        public async Task<AddOperationResultStatus> RemoveHallPlanAsync(int hallId)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    await dbConnection.ExecuteAsync(
                        "RemoveSeats",
                        new { HallId = hallId },
                        commandType: CommandType.StoredProcedure
                    );

                    return AddOperationResultStatus.Ok;
                }
            }
            catch
            {
                return AddOperationResultStatus.UniqueIndexError;
            }
        }

        public async Task<List<NameIdEntity>> GetHallsAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<NameIdEntity> nameIdEntity = (List<NameIdEntity>)await dbConnection.QueryAsync<NameIdEntity>(
                    "GetUniqueHalls",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }
    }
}
