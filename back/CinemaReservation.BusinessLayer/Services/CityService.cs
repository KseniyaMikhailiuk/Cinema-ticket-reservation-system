using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Exceptions;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.DataAccessLayer.Exceptions;
using Mapster;
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

        public async Task<int> UpsertCityAsync(CityModel cityModel)
        {
            try
            {
                int result = await _cityRepository.UpsertCityAsync(
                    cityModel.Adapt<CityEntity>()
                );

                return result;
            }
            catch(UniqueIndexException e)
            {
                throw new ConflictException(e);
            }
        }

        public async Task<IReadOnlyCollection<CityModel>> GetCityNamesAsync()
        {

            IReadOnlyCollection<CityEntity> cities = await _cityRepository.GetCitiesByNameAsync();

            IReadOnlyCollection<CityModel> citiesList = cities.Adapt<IReadOnlyCollection<CityModel>>();

            return citiesList;

        }
    }
}
