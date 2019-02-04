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
                    cinemaModel.CityId
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

        public async Task<List<OptionModel>> GetCinemaOptionsAsync()
        {
            List<OptionNameIdEntity> cinemas = await _cinemaRepository.GetCinemasAsync();

            List<OptionModel> cinemasList = cinemas.GetOptionModelList();

            return cinemasList;
        }
    }
}
