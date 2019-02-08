﻿using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.DataAccessLayer.Exceptions;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    public class AdditionalServiceRepository : IAdditionalServiceRepository
    {
        private readonly IDalSettings _settings;


        public AdditionalServiceRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task UpsertAdditionalServiceAsync(AdditionalServiceEntity additionalServiceEntity)
        {
            try
            {
                using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
                {
                    await dbConnection.QuerySingleOrDefaultAsync(
                        "UpsertAdditionalService",
                        additionalServiceEntity,
                        commandType: CommandType.StoredProcedure
                    );
                }
            }
            catch(SqlException e)
            {
                throw new UniqueIndexException("UpsertAdditionalService", e);
            }
        }

        public async Task<IReadOnlyCollection<OptionNameIdEntity>> GetServiceOptionsAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                IReadOnlyCollection<OptionNameIdEntity> nameIdEntity = (IReadOnlyCollection<OptionNameIdEntity>)await dbConnection.QueryAsync<OptionNameIdEntity>(
                    "GetServiceOptions",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }

    }
}
