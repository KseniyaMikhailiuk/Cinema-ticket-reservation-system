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
    public class CinemaController : Controller
    {
        private ICinemaService _cinemaService;

        public CinemaController(
            ICinemaService cinemaService
        )
        {
            _cinemaService = cinemaService;
        }

        [HttpPost("addcinema")]
        public async Task<IActionResult> AddCinemaAsync(UpsertCinemaRequest addCinemaRequest)
        {
            UpsertItemResultStatusAndId cinemaResultModel = await _cinemaService.AddCinemaAsync(
                new CinemaModel(
                    addCinemaRequest.Name,
                    addCinemaRequest.City
                )
            );

            if (cinemaResultModel.UpsertItemResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(
                    cinemaResultModel.Id
                );
            }

            return Conflict("Cinema exists");
        }

        [HttpPut("editcinema")]
        public async Task<IActionResult> EditCinemaAsync(UpsertCinemaRequest editCinemaRequest)
        {
            UpsertItemResultStatusAndId cinemaResultModel = await _cinemaService.EditCinemaAsync(
                new CinemaModel(
                    editCinemaRequest.Id,
                    editCinemaRequest.Name,
                    editCinemaRequest.City
                )
            );

            if (cinemaResultModel.UpsertItemResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(
                    cinemaResultModel.Id
                );
            }

            return Conflict("Cinema exists");
        }

        [HttpGet("getCinemaFilterOptions")]
        public async Task<IActionResult> GetCinemaFilterOptionsAsync()
        {
            CinemaFilterOptionsModel result = await _cinemaService.GetCinemaOptionsAsync();

            CinemaFilterOptionsResponse response = new CinemaFilterOptionsResponse(
                ModelListToResponseList(result.Cities).ToArray(),
                ModelListToResponseList(result.Cinemas).ToArray()
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
