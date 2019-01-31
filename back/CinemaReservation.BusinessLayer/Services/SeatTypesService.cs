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

            return GetOptionListFromArray(seatTypes);
        }

        private List<FilterOptionModel> GetOptionListFromArray(List<NameIdEntity> entities)
        {
            List<FilterOptionModel> list = new List<FilterOptionModel>();

            foreach (NameIdEntity item in entities)
            {
                list.Add(
                    new FilterOptionModel(
                        item.Name,
                        item.Id,
                        item.ParentId
                    )
                );
            }

            return list;
        }
    }
}
