using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using CinemaReservation.DataAccessLayer.Exceptions;

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
            catch(SqlException e)
            {
                throw new UniqueIndexException("UpsertSeance", e);
            }
        }

        public async Task AddSeanceAdditionalServicesAsync(List<ServicePriceEntity> seanceServices, OperationContext context)
        {
            try
            {
                int id = await context.Connection.ExecuteAsync(
                    "AddSeanceServices",
                    seanceServices,
                    commandType: CommandType.StoredProcedure,
                    transaction: context.Transaction
                );
            }
            catch(SqlException e)
            {
                throw new UniqueIndexException("AddSeanceServices", e);
            }
        }

        public async Task AddSeanceSeatPricesAsync(List<SeatPriceEntity> seanceSeatPrices, OperationContext context)
        {
            try
            {
                int id = await context.Connection.ExecuteAsync(
                    "AddSeanceSeatPrices",
                    seanceSeatPrices,
                    commandType: CommandType.StoredProcedure,
                    transaction: context.Transaction
                );
            }
            catch
            {
                throw new UniqueIndexException("AddSeanceSeatPrices");
            }
        }

        public OperationContext GetOperationContext()
        {
            IDbConnection connection = new SqlConnection(_settings.ConnectionString);
            return new OperationContext(connection);
        }
    }
}
