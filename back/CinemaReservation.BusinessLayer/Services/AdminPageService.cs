using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Contracts;
using CinemaReservation.DataAccessLayer.Entities;

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

        public async Task<CinemaResultModel> AddCinemaAsync(CinemaModel cinemaModel)
        {
            try
            {
                int cinemaId = await _adminPageRepository.AddCinemaAsync(
                    new CinemaEntity(
                        cinemaModel.Name,
                        cinemaModel.City
                    )
                );

                return new CinemaResultModel(
                    cinemaModel.Name,
                    cinemaModel.City,
                    cinemaId,
                    AddCinemaResultStatus.Ok
                );
            }
            catch
            {
                return new CinemaResultModel(AddCinemaResultStatus.CityCinemaCombinationExists);
            }
        }


        public async Task<bool> AddHallsAsync(HallsModel hallsModel)
        {
            foreach (HallModel hall in hallsModel.Halls)
            {
                List<SeatModel> hallSeats = hallsModel
                    .Seats
                    .FindAll(seat => seat.HallId == hall.Id);

                int hallId = await _adminPageRepository.AddHallAsync(
                    new HallEntity(
                        hall.Name,
                        hallsModel.CinemaId
                    )
                );

                List<SeatEntity> seatEntities = new List<SeatEntity>();

                foreach (SeatModel seat in hallSeats)
                {
                    seatEntities.Add(
                        new SeatEntity(
                            seat.Type,
                            seat.Raw,
                            seat.Line,
                            hallId
                        )
                    );
                }

                await _adminPageRepository.AddHallPlanAsync(seatEntities);
            }

            return true;
        }
    }
}
