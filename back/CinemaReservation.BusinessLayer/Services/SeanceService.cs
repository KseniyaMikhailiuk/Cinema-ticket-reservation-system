using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

namespace CinemaReservation.BusinessLayer.Services
{
    public class SeanceService: ISeanceService
    {
        private ISeanceRepository _seanceRepository;

        public SeanceService(
            ISeanceRepository seanceRepository
        )
        {
            _seanceRepository = seanceRepository;
        }

        public async Task AddSeanceAsync(SeanceModel seanceModel)
        {
            AddOperationResultEntity result = await _seanceRepository.UpsertSeanceAsync(new SeanceEntity(
                seanceModel.DateTime,
                seanceModel.FilmId,
                seanceModel.HallId
            ));
        }
    }
}
