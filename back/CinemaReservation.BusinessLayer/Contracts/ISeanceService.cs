using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ISeanceService
    {
        Task AddSeance(SeanceModel seanceModel);
    }
}
