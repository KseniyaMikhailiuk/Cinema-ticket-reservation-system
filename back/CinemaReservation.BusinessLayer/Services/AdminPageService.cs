using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Services
{
    public class AdminPageService: IAdminPageService
    {
        private IAdminPageRepository _adminPageRepository;

        public AdminPageService(
            IAdminPageRepository adminPageRepository
        )
        {
            _adminPageRepository = adminPageRepository;
        }

        public async Task<CinemaFilterOptionsModel> GetCinemaFilterOptionsAsync()
        {
            List<NameIdEntity> cities = await _adminPageRepository.GetUniqueCitiesAsync();
            List<NameIdEntity> cinemas = await _adminPageRepository.GetUniqueCinemasAsync();
            List<NameIdEntity> halls = await _adminPageRepository.GetUniqueHallsAsync();

            List<FilterOptionModel> citiesList = GetFilterOptionListFromArray(cities);

            List<FilterOptionModel> cinemasList = GetFilterOptionListFromArray(cinemas);

            List<FilterOptionModel> hallsList = GetFilterOptionListFromArray(halls);

            return new CinemaFilterOptionsModel(
                citiesList,
                cinemasList,
                hallsList
            );
        }

        private List<FilterOptionModel> GetFilterOptionListFromArray(List<NameIdEntity> entities)
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
