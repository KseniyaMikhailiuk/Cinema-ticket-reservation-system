using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class CinemaRepository: ICinemaRepository
    {
        private readonly IDalSettings _settings;


        public CinemaRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<AddOperationResultEntity> UpsertCinemaAsync(CinemaEntity cinemaEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                try
                {
                    int cinemaId = await dbConnection.QuerySingleOrDefaultAsync<int>(
                        "UpsertCinema",
                        cinemaEntity,
                        commandType: CommandType.StoredProcedure
                    );
                    return new AddOperationResultEntity(cinemaId, AddOperationResultStatus.Ok);
                }
                catch
                {
                    return new AddOperationResultEntity(AddOperationResultStatus.UniqueIndexError);
                }
            }
        }
    }
}
