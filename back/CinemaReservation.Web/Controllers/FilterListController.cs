using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
    public class FilterListController : Controller
    {
        private IFilterListService _filterListService;

        public FilterListController(
            IFilterListService adminPageService
        )
        {
            _filterListService = adminPageService;
        }

        [HttpGet("getCinemaFilterOptions")]
        public async Task<IActionResult> GetCinemaFilterOptions()
        {
            CinemaFilterOptionsModel result = await _filterListService.GetCinemaOptionsAsync();

            CinemaFilterOptionsResponse response = new CinemaFilterOptionsResponse(
                ModelListToResponseList(result.Cities).ToArray(),
                ModelListToResponseList(result.Cinemas).ToArray(),
                ModelListToResponseList(result.Halls).ToArray()
            );

            return Ok(response);
        }

        [HttpGet("getFilmOptions")]
        public async Task<IActionResult> GetFilmOptions()
        {
            List<FilterOptionModel> result = await _filterListService.GetFilmOptionsAsync();

            return Ok(result);
        }


        private List<FilterOptionItem> ModelListToResponseList(List<FilterOptionModel> modelList)
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

            return list;
        }
    }
}
