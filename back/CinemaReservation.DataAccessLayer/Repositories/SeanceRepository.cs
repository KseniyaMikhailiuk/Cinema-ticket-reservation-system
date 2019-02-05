using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class SeanceRepository: ISeanceRepository
    {
        private readonly IDalSettings _settings;

        public SeanceRepository(
            IDalSettings settings
        )
        {
            _settings = settings;
        }

        public async Task<AddOperationResultEntity> UpsertSeanceAsync(SeanceEntity seanceEntity)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    int id = await dbConnection.QuerySingleOrDefaultAsync<int>(
                        "UpsertSeance",
                        seanceEntity,
                        commandType: CommandType.StoredProcedure
                    );
                    return new AddOperationResultEntity(id, AddOperationResultStatus.Ok);
                }
            }
            catch
            {
                return new AddOperationResultEntity(AddOperationResultStatus.UniqueIndexError);
            }
        }

        public async Task<AddOperationResultStatus> AddSeanceAdditionalServicesAsync(List<ServicePriceEntity> seanceServices)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    int id = await dbConnection.ExecuteAsync(
                        "AddSeanceServices",
                        seanceServices,
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

        public async Task<AddOperationResultStatus> AddSeanceSeatPricesAsync(List<SeatPriceEntity> seanceSeatPrices)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    int id = await dbConnection.ExecuteAsync(
                        "AddSeanceSeatPrices",
                        seanceSeatPrices,
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
    }
}
