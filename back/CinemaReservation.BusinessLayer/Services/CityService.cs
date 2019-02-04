using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Services
{
    public class CityService: ICityService
    {
        private ICityRepository _cityRepository;

        public CityService(
            ICityRepository cityRepository
        )
        {
            _cityRepository = cityRepository;
        }

        public async Task<UpsertItemResultStatusAndId> UpsertCityAsync(CityModel cityModel)
        {
            AddOperationResultEntity cityResultEntity = await _cityRepository.UpsertCityAsync(
                new CityEntity(
                    cityModel.Id,
                    cityModel.Name
                )
            );

            if (cityResultEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return new UpsertItemResultStatusAndId(
                    cityResultEntity.Id,
                    UpsertItemResultStatus.Ok
                );
            }

            return new UpsertItemResultStatusAndId(UpsertItemResultStatus.Conflict);
        }

        public async Task<List<OptionModel>> GetCityOptionsAsync()
        {

            List<OptionNameIdEntity> cities = await _cityRepository.GetCitiesAsync();

            List<OptionModel> citiesList = cities.GetOptionModelList();

            return citiesList;

        }
    }
}
