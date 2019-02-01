using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using System.Collections.Generic;

namespace CinemaReservation.Web.Controllers
{
    public static class ListArrayExtension
    {
        public static FilterOptionItem[] GetOptionsModelListToResponseArray(this List<FilterOptionModel> modelList)
        {
            List<FilterOptionItem> list = new List<FilterOptionItem>();

            foreach (FilterOptionModel item in modelList)
            {
                list.Add(
                    new FilterOptionItem(
                        item.Name,
                        item.Id,
                        item.ParentId
                    )
                );
            }

            return list.ToArray();
        }

        public static List<PriceModel> GetPriceRequestArrayToPriceModelList(this PriceItem[] modelList)
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
