using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly IDalSettings _settings;


        public UserRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }


        public async Task<int> UpsertUserAsync(UserEntity userEntity)
        {
            using(IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString)){
                return await dbConnection.ExecuteScalarAsync<int>(
                    "UpsertUser",
                    userEntity,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task<UserEntity> GetUserByEmailAsync(string email)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                return await dbConnection.QuerySingleOrDefaultAsync<UserEntity>(
                    "GetUserByEmail",
                    new { Email = email },
                    commandType: CommandType.StoredProcedure
                );
            }
        }
    }
}
