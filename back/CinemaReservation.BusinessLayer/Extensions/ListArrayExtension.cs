using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Services
{
    public static class ListArrayExtension
    {
        public static List<FilterOptionModel> GetOptionModelListFromEntityArray(this List<NameIdEntity> entities)
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

        public static List<SeatEntity> GetSeatEntityListFromModelList(this List<SeatModel> hallSeats, int hallId)
        {
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

            return seatEntities;
        }


    public static List<PriceEntity> GetPriceEntityListFromModelList(this List<PriceModel> entities, int parentId)
        {
            List<PriceEntity> list = new List<PriceEntity>();

            foreach (PriceModel item in entities)
            {
                list.Add(
                    new PriceEntity(
                        parentId,
                        item.ItemId,
                        item.Price
                    )
                );
            }

            return list;
        }
    }
}
