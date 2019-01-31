﻿using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Dapper;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Repositories
{
    class AdditionalServiceRepository : IAdditionalServicesRepository
    {
        private readonly IDalSettings _settings;


        public AdditionalServiceRepository(IDalSettings dalSettings)
        {
            _settings = dalSettings;
        }

        public async Task<AddOperationResultStatus> UpsertAdditionalServiceAsync(AdditionalServiceEntity additionalServiceEntity)
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
                    return AddOperationResultStatus.Ok;
                }
            }
            catch
            {
                return AddOperationResultStatus.UniqueIndexError;
            }
        }
        public async Task<List<NameIdEntity>> GetServiceOptionsAsync()
        {
            using (IDbConnection dbConnection = new SqlConnection(_settings.ConnectionString))
            {
                List<NameIdEntity> nameIdEntity = (List<NameIdEntity>)await dbConnection.QueryAsync<NameIdEntity>(
                    "GetServiceOptions",
                    commandType: CommandType.StoredProcedure
                );

                return nameIdEntity;
            }
        }

    }
}
