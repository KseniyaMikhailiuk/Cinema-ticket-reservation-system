using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using System.Collections.Generic;

namespace CinemaReservation.Web.Controllers
{
    public static class ListArrayExtension
    {
        public static OptionItem[] GetOptionsResponseArray(this List<OptionModel> modelList)
        {
            List<OptionItem> list = new List<OptionItem>();

            foreach (OptionModel item in modelList)
            {
                list.Add(
                    new OptionItem(
                        item.Name,
                        item.Id,
                        item.ParentId
                    )
                );
            }

            return list.ToArray();
        }

        public static List<HallModel> GetHallModelList(this Hall[] hallsArray)
        {
            List<HallModel> halls = new List<HallModel>();

            foreach (Hall hall in hallsArray)
            {
                halls.Add(new HallModel(
                    hall.Name,
                    hall.Id
                ));
            }

            return halls;
        }

        public static List<SeatModel> GetSeatModelList(this Seat[] seatsArray)
        {
            List<SeatModel> seats = new List<SeatModel>();

            foreach (Seat seat in seatsArray)
            {
                seats.Add(new SeatModel(
                    seat.Type,
                    seat.Raw,
                    seat.Line,
                    seat.HallId
                ));
            }

            return seats;
        }

        public static List<PriceModel> GetPriceModelList(this PriceItem[] modelList)
        {
            List<PriceModel> list = new List<PriceModel>();

            foreach (PriceItem item in modelList)
            {
                list.Add(
                    new PriceModel(
                        item.Id,
                        item.Price
                    )
                );
            }

            return list;
        }
    }
}
