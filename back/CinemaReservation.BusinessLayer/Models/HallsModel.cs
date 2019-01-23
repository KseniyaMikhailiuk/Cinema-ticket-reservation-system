using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Models
{
    public class HallsModel
    {
        public List<HallModel> Halls { get; }
        public List<SeatModel> Seats { get; }
        public int CinemaId { get; }

        public HallsModel(
            List<HallModel> halls,
            List<SeatModel> seats,
            int cinemaId
        )
        {
            Halls = halls;
            Seats = seats;
            CinemaId = cinemaId;
        }
    }
}
