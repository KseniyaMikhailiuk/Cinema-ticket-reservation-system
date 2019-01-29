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

        public async Task<List<NameIdEntity>> GetUniqueCinemasAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<NameIdEntity> nameIdEntity = (List<NameIdEntity>) await dbConnection.QueryAsync<NameIdEntity>(
                    "GetUniqueCinemas",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }

        public async Task<List<NameIdEntity>> GetUniqueCitiesAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<NameIdEntity> nameIdEntity = (List<NameIdEntity>) await dbConnection.QueryAsync<NameIdEntity>(
                    "GetUniqueCities",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }

        public async Task<List<NameIdEntity>> GetUniqueHallsAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<NameIdEntity> nameIdEntity = (List<NameIdEntity>)await dbConnection.QueryAsync<NameIdEntity>(
                    "GetUniqueHalls",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }
    }
}
