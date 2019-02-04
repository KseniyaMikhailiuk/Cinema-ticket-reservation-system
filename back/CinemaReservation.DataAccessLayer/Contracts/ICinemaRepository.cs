using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ICinemaRepository
    {
        Task<AddOperationResultEntity> UpsertCinemaAsync(CinemaEntity cinemaEntity);
        Task<List<OptionNameIdEntity>> GetCinemasAsync();
    }
}
