using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class SeatTypeRepository: ISeatTypeRepository
    {
        private readonly IDalSettings _settings;

        public SeatTypeRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<List<SeatTypeEntity>> GetSeatTypesAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<SeatTypeEntity> seatTypes = (List<SeatTypeEntity>)await dbConnection.QueryAsync<SeatTypeEntity>(
                    "GetSeatTypes",
                    commandType: CommandType.StoredProcedure
                );

                return seatTypes;
            }
        }
    }
}
