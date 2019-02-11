using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ISeanceService
    {
        Task UpsertSeanceAsync(SeanceModel seanceModel);
        Task<bool> CheckId(int id);
    }
}
