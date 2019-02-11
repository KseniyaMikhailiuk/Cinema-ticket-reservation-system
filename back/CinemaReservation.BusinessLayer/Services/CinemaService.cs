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
    public class CinemaService: ICinemaService
    {
        private ICinemaRepository _cinemaRepository;

        public CinemaService(
            ICinemaRepository cinemaRepository
        )
        {
            _cinemaRepository = cinemaRepository;
        }

        public async Task<int> UpsertCinemaAsync(CinemaModel cinemaModel)
        {
            try
            {
                int cinemaId = await _cinemaRepository.UpsertCinemaAsync(
                    cinemaModel.Adapt<CinemaEntity>()
                );
                return cinemaId;
            }
            catch(UniqueIndexException e)
            {
                throw new ConflictException(e);
            }

        }

        public async Task<IReadOnlyCollection<CinemaModel>> GetCinemasAsync()
        {
            IReadOnlyCollection<CinemaEntity> cinemas = await _cinemaRepository.GetCinemasAsync();

            return cinemas.Adapt<IReadOnlyCollection<CinemaModel>>();
        }
    }
}
