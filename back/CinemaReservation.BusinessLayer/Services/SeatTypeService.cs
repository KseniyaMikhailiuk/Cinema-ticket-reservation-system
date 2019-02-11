using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using Mapster;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Services
{
    public class SeatTypeService : ISeatTypesService
    {
        private ISeatTypeRepository _seatTypesRepository;

        public SeatTypeService(
            ISeatTypeRepository seatTypesRepository
        )
        {
            _seatTypesRepository = seatTypesRepository;
        }

        public async Task<IReadOnlyCollection<SeatTypeModel>> GetSeatTypes()
        {
            IReadOnlyCollection<SeatTypeEntity> seatTypes = await _seatTypesRepository.GetSeatTypesAsync();

            return seatTypes.Adapt<IReadOnlyCollection<SeatTypeModel>>();
        }
    }
}
