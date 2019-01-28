using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

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

        public async Task UpsertSeance(SeanceEntity seanceEntity)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    await dbConnection.QuerySingleOrDefaultAsync<int>(
                        "UpsertHall",
                        seanceEntity,
                        commandType: CommandType.StoredProcedure
                    );
                }
            }
            catch
            {

            }
        }
    }
}
