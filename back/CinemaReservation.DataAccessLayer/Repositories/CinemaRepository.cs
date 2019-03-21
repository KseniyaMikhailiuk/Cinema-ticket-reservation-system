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
    public class CinemaRepository: ICinemaRepository
    {
        private readonly IDalSettings _settings;


        public CinemaRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<int> UpsertCinemaAsync(CinemaEntity cinemaEntity)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    int cinemaId = await dbConnection.QuerySingleOrDefaultAsync<int>(
                        "UpsertCinema",
                        cinemaEntity,
                        commandType: CommandType.StoredProcedure
                    );
                    return cinemaId;
                }
            }
            catch(SqlException e)
            {
                throw new UniqueIndexException("UpsertCinema", e);
            }
        }

        public async Task<IReadOnlyCollection<CinemaEntity>> GetCinemasAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                IReadOnlyCollection<CinemaEntity> nameIdEntity =
                    (IReadOnlyCollection<CinemaEntity>)await dbConnection.QueryAsync<CinemaEntity>(
                        "GetCinemas",
                        commandType: CommandType.StoredProcedure
                    );

                return nameIdEntity;
            }
        }

        public async Task<bool> CheckId(int id)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                bool result = await dbConnection.ExecuteScalarAsync<bool>(
                    "CheckId",
                    new { Id = id, TableName = "Cinemas" },
                    commandType: CommandType.StoredProcedure
                );

                return result;
            }
        }
    }
}
