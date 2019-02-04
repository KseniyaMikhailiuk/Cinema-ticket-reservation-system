using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ICityRepository
    {
        Task<AddOperationResultEntity> UpsertCityAsync(CityEntity cityEntity);
        Task<List<OptionNameIdEntity>> GetCitiesAsync();
    }
}
