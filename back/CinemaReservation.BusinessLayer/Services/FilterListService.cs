using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Services
{
    public class FilterListService: IFilterListService
    {
        private IFilterListRepository _filterListRepository;

        public FilterListService(
            IFilterListRepository adminPageRepository
        )
        {
            _filterListRepository = adminPageRepository;
        }

        public async Task<CinemaFilterOptionsModel> GetCinemaOptionsAsync()
        {
            List<NameIdEntity> cities = await _filterListRepository.GetUniqueCitiesAsync();
            List<NameIdEntity> cinemas = await _filterListRepository.GetUniqueCinemasAsync();
            List<NameIdEntity> halls = await _filterListRepository.GetUniqueHallsAsync();

            List<FilterOptionModel> citiesList = GetOptionListFromArray(cities);

            List<FilterOptionModel> cinemasList = GetOptionListFromArray(cinemas);

            List<FilterOptionModel> hallsList = GetOptionListFromArray(halls);

            return new CinemaFilterOptionsModel(
                citiesList,
                cinemasList,
                hallsList
            );
        }

        public async Task<List<FilterOptionModel>> GetFilmOptionsAsync()
        {
            List<NameIdEntity> films = await _filterListRepository.GetFilmOptionsAsync();

            return GetOptionListFromArray(films);
        }

        public async Task<List<FilterOptionModel>> GetSeatTypeOptionsAsync()
        {
            List<NameIdEntity> seatTypes = await _filterListRepository.GetSeatTypeOptionsAsync();

            return GetOptionListFromArray(seatTypes);
        }

        public async Task<List<FilterOptionModel>> GetServiceOptionsAsync()
        {
            List<NameIdEntity> services = await _filterListRepository.GetServiceOptionsAsync();

            return GetOptionListFromArray(services);
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
