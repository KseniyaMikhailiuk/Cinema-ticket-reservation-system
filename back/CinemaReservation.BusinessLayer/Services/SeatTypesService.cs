using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Services
{
    public class SeatTypesService : ISeatTypesService
    {
        private ISeatTypesRepository _seatTypesRepository;

        public SeatTypesService(
            ISeatTypesRepository seatTypesRepository
        )
        {
            _seatTypesRepository = seatTypesRepository;
        }

        public async Task<List<FilterOptionModel>> GetOptions()
        {
            List<NameIdEntity> seatTypes = await _seatTypesRepository.GetSeatTypeOptionsAsync();

            return EntityTransformationHelper.GetModelListFromEntityArray(seatTypes);
        }
    }
}
