using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.DataAccessLayer.Exceptions;
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


        public async Task<int> UpsertCityAsync(CityEntity cityEntity)
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
                    return cityId;
                }
            }
            catch(SqlException e)
            {
                throw new UniqueIndexException("UpsertCity", e);
            }
        }

        public async Task<IReadOnlyCollection<CityEntity>> GetCitiesByNameAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                IReadOnlyCollection<CityEntity> cities =
                    (IReadOnlyCollection<CityEntity>)await dbConnection.QueryAsync<CityEntity>(
                        "GetCities",
                        commandType: CommandType.StoredProcedure
                    );

                return cities;
            }
        }
    }
}
