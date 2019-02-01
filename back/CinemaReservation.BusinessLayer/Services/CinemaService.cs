using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CinemaReservation.BusinessLayer.Services
{
    public class CinemaService: ICinemaService
    {
        private ICinemaRepository _cinemaRepository;

        public CinemaService(
            ICinemaRepository cinemaRepository
        )
        {
            _cinemaRepository = cinemaRepository;
        }

        public async Task<UpsertItemResultStatusAndId> UpsertCinemaAsync(CinemaModel cinemaModel)
        {
            AddOperationResultEntity cinemaEntity = await _cinemaRepository.UpsertCinemaAsync(
                new CinemaEntity(
                    cinemaModel.Id,
                    cinemaModel.Name,
                    cinemaModel.City
                )
            );

            if (cinemaEntity.OperationResultStatus == AddOperationResultStatus.Ok)
            {
                return new UpsertItemResultStatusAndId(
                    cinemaEntity.Id,
                    UpsertItemResultStatus.Ok
                );
            }

            return new UpsertItemResultStatusAndId(UpsertItemResultStatus.Conflict);
        }

        public async Task<CinemaOptionsModel> GetCinemaOptionsAsync()
        {
            List<NameIdEntity> cities = await _cinemaRepository.GetCitiesAsync();
            List<NameIdEntity> cinemas = await _cinemaRepository.GetCinemasAsync();

            List<OptionModel> citiesList = cities.GetOptionModelList();

            List<OptionModel> cinemasList = cinemas.GetOptionModelList();

            return new CinemaOptionsModel(
                citiesList,
                cinemasList
            );
        }
    }
}
