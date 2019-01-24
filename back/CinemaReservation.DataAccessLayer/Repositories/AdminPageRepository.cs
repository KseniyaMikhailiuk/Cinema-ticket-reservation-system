using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    class AdminPageRepository: IAdminPageRepository
    {
        private readonly IDalSettings _settings;


        public AdminPageRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<CinemaResultEntity> UpsertCinemaAsync(CinemaEntity cinemaEntity)
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
                    return new CinemaResultEntity(cinemaId, OperationResultStatus.Ok);
                }
                catch
                {
                    return new CinemaResultEntity(OperationResultStatus.UniqueIndexError);
                }
            }
        }

        public async Task<HallResultEntity> UpsertHallAsync(HallEntity hallEntity)
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

                    return new HallResultEntity(hallId, OperationResultStatus.Ok);
                }
            }
            catch
            {
                return new HallResultEntity(OperationResultStatus.UniqueIndexError);
            }
        }

        public async Task<OperationResultStatus> AddHallPlanAsync(List<SeatEntity> seats)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                await dbConnection.ExecuteAsync(
                    "AddSeats",
                    seats,
                    commandType: CommandType.StoredProcedure
                );

                return OperationResultStatus.Ok;
            }
        }

        public async Task<OperationResultStatus> RemoveHallPlanAsync(int hallId)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                await dbConnection.ExecuteAsync(
                    "RemoveSeats",
                    new { HallId = hallId },
                    commandType: CommandType.StoredProcedure
                );

                return OperationResultStatus.Ok;
            }
        }
    }
}
