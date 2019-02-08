using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class FilmRepository : IFilmRepository
    {
        private readonly IDalSettings _settings;


        public FilmRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<int> UpsertFilmAsync(FilmEntity filmEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                int filmId = await dbConnection.QuerySingleOrDefaultAsync<int>(
                    "UpsertFilm",
                    filmEntity,
                    commandType: CommandType.StoredProcedure
                );

                return filmId;
            }
        }

        public async Task InsertFilmPosterAsync(FilmPosterEntity filmPosterEntity)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                await dbConnection.QuerySingleOrDefaultAsync<int>(
                    "InsertFilmPoster",
                    filmPosterEntity,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task<FullFilmEntity> GetFilmAsync(int id)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                FullFilmEntity film = await dbConnection.QuerySingleOrDefaultAsync<FullFilmEntity>(
                    "GetFilm",
                    new { Id = id },
                    commandType: CommandType.StoredProcedure
                );

                return film;
            }
        }

        public async Task<FilmPosterEntity> GetFilmPosterAsync(int id)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                FilmPosterEntity filmPoster = await dbConnection.QuerySingleOrDefaultAsync<FilmPosterEntity>(
                    "GetFilmPoster",
                    new { Id = id },
                    commandType: CommandType.StoredProcedure
                );

                return filmPoster;
            }
        }

        public async Task<List<FullFilmEntity>> GetFilmsByNameAsync(string filter)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<FullFilmEntity> nameIdEntity = (List<FullFilmEntity>)await dbConnection.QueryAsync<FullFilmEntity>(
                    "GetTopTenFilmsByName",
                    new { Filter = filter },
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }
    }
}
