using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
    public class AdminPageController : Controller
    {
        private IAdminPageService _adminPageService;

        public AdminPageController(
            IAdminPageService adminPageService
        )
        {
            _adminPageService = adminPageService;
        }

        [HttpGet("getCinemaFilterOptions")]
        public async Task<IActionResult> GetCinemaFilterOptions()
        {
            CinemaFilterOptionsModel result = await _adminPageService.GetCinemaFilterOptionsAsync();

            CinemaFilterOptionsResponse response = new CinemaFilterOptionsResponse(
                ModelListToResponseList(result.Cities).ToArray(),
                ModelListToResponseList(result.Cinemas).ToArray(),
                ModelListToResponseList(result.Halls).ToArray()
            );

            return Ok(response);
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
