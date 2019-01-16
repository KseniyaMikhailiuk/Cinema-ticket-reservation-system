using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    class UserRepository: IUserRepository
    {
        private readonly IDalSettings _settings;

        public UserRepository(IDalSettings settings)
        {
            _settings = settings;
        }
        public async Task<int> Create(UserRegistrationEntity registrationRequest)
        {
            using(IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString)){
                string storedProcedure = "CreateUser";
                return await dbConnection.ExecuteScalarAsync<int>(
                    storedProcedure,
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task<UserEntity> GetByEmail(string email)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                string storedProcedure = "GetUserByEmail";
                return await dbConnection.QuerySingleOrDefaultAsync<UserEntity>(
                    storedProcedure,
                    new { Email = email },
                    commandType: CommandType.StoredProcedure
                );
            }
        }

        public async Task<UserEntity> GetById(int id)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                string storedProcedure = "GetUserById";
                return await dbConnection.QuerySingleOrDefaultAsync<UserEntity>(
                    storedProcedure,
                    new { Id = id },
                    commandType: CommandType.StoredProcedure
                );
            }
        }
    }
}
