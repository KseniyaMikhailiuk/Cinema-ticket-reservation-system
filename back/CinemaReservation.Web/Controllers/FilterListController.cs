using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public async Task<IActionResult> GetCinemaFilterOptionsAsync()
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
        public async Task<IActionResult> GetFilmOptionsAsync()
        {
            List<FilterOptionModel> result = await _filterListService.GetFilmOptionsAsync();

            return Ok(result);
        }

        [HttpGet("getSeatTypeOptions")]
        public async Task<IActionResult> GetSeatTypeOptionsAsync()
        {
            List<FilterOptionModel> result = await _filterListService.GetSeatTypeOptionsAsync();

            return Ok(result);
        }

        [HttpGet("getServiceOptions")]
        public async Task<IActionResult> GetServiceOptionsAsync()
        {
            List<FilterOptionModel> result = await _filterListService.GetServiceOptionsAsync();

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
