using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Services
{
    public static class ListArrayExtension
    {
        public static List<OptionModel> GetOptionModelList(this List<NameIdEntity> entities)
        {
            List<OptionModel> list = new List<OptionModel>();

            foreach (NameIdEntity item in entities)
            {
                list.Add(
                    new OptionModel(
                        item.Name,
                        item.Id,
                        item.ParentId
                    )
                );
            }

            return list;
        }

        public static List<SeatEntity> GetSeatEntityList(this List<SeatModel> hallSeats, int hallId)
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


    public static List<PriceEntity> GetPriceEntityList(this List<PriceModel> entities, int parentId)
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
