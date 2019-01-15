using System.Threading.Tasks;
using Dapper;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Data;
using System.Data.SqlClient;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    class UserRepository: IUserRepository
    {
        private readonly IDalSettings _settings;

        public UserRepository(IDalSettings settings)
        {
            _settings = settings;
        }
        public Task<AuthorizationResponse> Create(RegistrationRequest registrationRequest)
        {
            using(IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString)){
                string storedProcedure = "CreateUser";
                var result = dbConnection.ExecuteScalarAsync(storedProcedure, commandType: CommandType.StoredProcedure);
            }
        }

        public Task<AuthorizationResponse> GetByEmail(string Email)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                string storedProcedure = "CreateUser";
                var result = dbConnection.ExecuteScalarAsync(storedProcedure, commandType: CommandType.StoredProcedure);
            }
        }

        public Task<AuthorizationResponse> GetById(int id)
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                string storedProcedure = "CreateUser";
                var result = dbConnection.ExecuteScalarAsync(storedProcedure, commandType: CommandType.StoredProcedure);
            }
        }
    }
}
