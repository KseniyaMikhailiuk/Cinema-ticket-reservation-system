using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ISeanceService
    {
        Task<UpsertItemResultStatus> AddSeanceAsync(SeanceModel seanceModel);
    }
}
