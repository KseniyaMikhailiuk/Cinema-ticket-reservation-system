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

        public async Task<int> UpsertSeanceAsync(SeanceEntity seanceEntity, OperationContext context)
        {
            try
            {
                int id = await context.Connection.QuerySingleOrDefaultAsync<int>(
                   "UpsertSeance",
                   seanceEntity,
                   commandType: CommandType.StoredProcedure,
                   transaction: context.Transaction
                );

                return id;
            }
            catch
            {
                throw new System.Exception();
            }
        }

        public async Task<AddOperationResultStatus> AddSeanceAdditionalServicesAsync(List<ServicePriceEntity> seanceServices, OperationContext context)
        {
            try
            {
                int id = await context.Connection.ExecuteAsync(
                    "AddSeanceServices",
                    seanceServices,
                    commandType: CommandType.StoredProcedure,
                    transaction: context.Transaction
                );
                return AddOperationResultStatus.Ok;
            }
            catch
            {
                return AddOperationResultStatus.UniqueIndexError;
            }
        }

        public async Task<AddOperationResultStatus> AddSeanceSeatPricesAsync(List<SeatPriceEntity> seanceSeatPrices, OperationContext context)
        {
            try
            {
                int id = await context.Connection.ExecuteAsync(
                    "AddSeanceSeatPrices",
                    seanceSeatPrices,
                    commandType: CommandType.StoredProcedure,
                    transaction: context.Transaction
                );
                return AddOperationResultStatus.Ok;
            }
            catch
            {
                return AddOperationResultStatus.UniqueIndexError;
            }
        }

        public OperationContext GetOperationContext()
        {
            IDbConnection connection = new SqlConnection(_settings.ConnectionString);
            return new OperationContext(connection);
        }
    }
}
