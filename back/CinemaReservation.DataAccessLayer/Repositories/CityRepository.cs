using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class CityRepository: ICityRepository
    {
        private readonly IDalSettings _settings;

        public CityRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }


        public async Task<AddOperationResultEntity> UpsertCityAsync(CityEntity cityEntity)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    int cityId = await dbConnection.QuerySingleOrDefaultAsync<int>(
                        "UpsertCity",
                        cityEntity,
                        commandType: CommandType.StoredProcedure
                    );
                    return new AddOperationResultEntity(cityId, AddOperationResultStatus.Ok);
                }
            }
            catch
            {
                return new AddOperationResultEntity(AddOperationResultStatus.UniqueIndexError);
            }
        }

        public async Task<List<OptionNameIdEntity>> GetCitiesAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<OptionNameIdEntity> nameIdEntity = (List<OptionNameIdEntity>)await dbConnection.QueryAsync<OptionNameIdEntity>(
                    "GetCities",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }
    }
}
