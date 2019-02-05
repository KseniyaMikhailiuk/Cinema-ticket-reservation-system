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

        public async Task<List<OptionNameIdEntity>> GetHallsAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<OptionNameIdEntity> nameIdEntity = (List<OptionNameIdEntity>)await dbConnection.QueryAsync<OptionNameIdEntity>(
                    "GetHalls",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }
    }
}
