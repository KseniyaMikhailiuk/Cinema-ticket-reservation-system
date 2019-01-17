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
        public async Task<int> UpsertAsync(UserRegistrationEntity registrationRequest)
        {
            using(IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString)){
                return await dbConnection.ExecuteScalarAsync<int>(
                    "CreateUser",
                    registrationRequest,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task<UserEntity> GetByEmailAsync(string email)
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
