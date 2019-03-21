using System.Threading.Tasks;
using System.Collections.Generic;
using CinemaReservation.DataAccessLayer.Entities;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using Mapster;
using CinemaReservation.DataAccessLayer.Exceptions;
using CinemaReservation.BusinessLayer.Exceptions;

namespace CinemaReservation.BusinessLayer.Services
{
    public class HallService: IHallService
    {
        private IHallRepository _hallRepository;

        public HallService(
            IHallRepository hallRepository
        )
        {
            _hallRepository = hallRepository;
        }

        public async Task UpsertHallsAsync(CinemaHallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                int result;
                try
                {
                    result = await _hallRepository.UpsertHallAsync(
                        new HallEntity(
                            hall.Id,
                            hall.Name,
                            hallsModel.CinemaId
                        )
                    );
                }
                catch(UniqueIndexException e)
                {
                    throw new ConflictException(e);
                }

                List<SeatModel> hallSeats = hallsModel
                    .Seats
                    .FindAll(seat => seat.HallId == hall.Id);

                if (hall.Id == result)
                {
                    await _hallRepository.DeleteHallPlanAsync(result);
                }

                TypeAdapterConfig<SeatModel, SeatEntity>
                    .NewConfig()
                    .Map(dest => dest.HallId, sourse => result);

                await _hallRepository.AddHallPlanAsync(
                    hallSeats
                        .Adapt<List<SeatEntity>>()
                );
            }
        }

        public async Task<IReadOnlyCollection<HallModel>> GetHallsAsync()
        {
            IReadOnlyCollection<HallEntity> halls = await _hallRepository.GetHallsAsync();

            return halls.Adapt<IReadOnlyCollection<HallModel>>();
        }
    }
}
