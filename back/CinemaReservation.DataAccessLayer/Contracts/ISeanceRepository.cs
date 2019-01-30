using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ISeanceRepository
    {
        Task<AddOperationResultEntity> UpsertSeanceAsync(SeanceEntity seanceEntity);
    }
}
