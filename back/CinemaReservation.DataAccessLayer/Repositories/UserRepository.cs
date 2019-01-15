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
                var response = await dbConnection.ExecuteScalarAsync<int>(storedProcedure, commandType: CommandType.StoredProcedure);
                return response;
            }
        }

        public async Task<UserAuthorizationSuccessEntity> GetByEmail(string email)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                string storedProcedure = "GetUserByEmail";
                var response = await dbConnection.QuerySingleOrDefaultAsync<UserAuthorizationSuccessEntity>(storedProcedure, new { Email = email }, commandType: CommandType.StoredProcedure);
                return response;
            }
        }

        public async Task<UserAuthorizationSuccessEntity> GetById(int id)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                string storedProcedure = "GetUserById";
                var response = await dbConnection.QuerySingleOrDefaultAsync<UserAuthorizationSuccessEntity>(storedProcedure, new { Id = id }, commandType: CommandType.StoredProcedure);
                return response;
            }
        }
    }
}
