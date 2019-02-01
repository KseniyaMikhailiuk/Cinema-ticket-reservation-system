using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.DataAccessLayer.Entities;
using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Services
{
    public static class EntityTransformationHelper
    {
        public static List<FilterOptionModel> GetModelListFromEntityArray(List<NameIdEntity> entities)
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

        public static List<PriceEntity> GetSeatPriceEntityListFromModelList(List<PriceModel> entities, int parentId)
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
