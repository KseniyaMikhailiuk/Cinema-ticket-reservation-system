using System.Threading.Tasks;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.DataAccessLayer.Contracts
{
    public interface ISeanceRepository
    {
        Task<AddOperationResultStatus> UpsertSeanceAsync(SeanceEntity seanceEntity);
    }
}
