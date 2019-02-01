using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using System.Collections.Generic;

namespace CinemaReservation.Web.Controllers
{
    public static class ListArrayExtension
    {
        public static OptionItem[] GetOptionsModelListToResponseArray(this List<OptionModel> modelList)
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
