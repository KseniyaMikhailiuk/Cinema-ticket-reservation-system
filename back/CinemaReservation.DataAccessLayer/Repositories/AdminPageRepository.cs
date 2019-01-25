using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    class AdminPageRepository : IAdminPageRepository
    {
        private readonly IDalSettings _settings;


        public AdminPageRepository(IDalSettings dalSettings)
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

        public async Task<AddOperationResultEntity> UpsertHallAsync(HallEntity hallEntity)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    int hallId = await dbConnection.QuerySingleOrDefaultAsync<int>(
                        "UpsertHall",
                        hallEntity,
                        commandType: CommandType.StoredProcedure
                    );

                    return new AddOperationResultEntity(hallId, AddOperationResultStatus.Ok);
                }
            }
            catch
            {
                return new AddOperationResultEntity(AddOperationResultStatus.UniqueIndexError);
            }
        }

        public async Task<AddOperationResultStatus> AddHallPlanAsync(List<SeatEntity> seats)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                await dbConnection.ExecuteAsync(
                    "AddSeats",
                    seats,
                    commandType: CommandType.StoredProcedure
                );

                return AddOperationResultStatus.Ok;
            }
        }

        public async Task<AddOperationResultStatus> RemoveHallPlanAsync(int hallId)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                await dbConnection.ExecuteAsync(
                    "RemoveSeats",
                    new { HallId = hallId },
                    commandType: CommandType.StoredProcedure
                );

                return AddOperationResultStatus.Ok;
            }
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
        public async Task<AddOperationResultEntity> UpsertFilmPosterAsync(FilmPosterEntity filmPosterEntity)
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
