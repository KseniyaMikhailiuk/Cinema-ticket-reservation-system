using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    class FilmRepository : IFilmRepository
    {
        private readonly IDalSettings _settings;


        public FilmRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<AddOperationResultEntity> UpsertFilmAsync(FilmEntity filmEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                int filmId = await dbConnection.QuerySingleOrDefaultAsync<int>(
                    "UpsertFilm",
                    filmEntity,
                    commandType: CommandType.StoredProcedure
                );

                return new AddOperationResultEntity(
                    filmId,
                    AddOperationResultStatus.Ok
                );
            }
        }
        public async Task<AddOperationResultEntity> InsertFilmPosterAsync(FilmPosterEntity filmPosterEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                int filmId = await dbConnection.QuerySingleOrDefaultAsync<int>(
                    "InsertFilmPoster",
                    filmPosterEntity,
                    commandType: CommandType.StoredProcedure
                );

                return new AddOperationResultEntity(
                    filmId,
                    AddOperationResultStatus.Ok
                );
            }
        }

    }
}
