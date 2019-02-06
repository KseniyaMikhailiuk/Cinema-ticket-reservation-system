using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class AdditionalServiceRepository : IAdditionalServiceRepository
    {
        private readonly IDalSettings _settings;


        public AdditionalServiceRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<AddOperationResultStatus> UpsertAdditionalServiceAsync(AdditionalServiceEntity additionalServiceEntity)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    await dbConnection.QuerySingleOrDefaultAsync(
                        "UpsertAdditionalService",
                        additionalServiceEntity,
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

        public async Task<List<OptionNameIdEntity>> GetServiceOptionsAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<OptionNameIdEntity> nameIdEntity = (List<OptionNameIdEntity>)await dbConnection.QueryAsync<OptionNameIdEntity>(
                    "GetServiceOptions",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }

    }
}
