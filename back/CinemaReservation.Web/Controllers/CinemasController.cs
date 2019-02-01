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
    public class CinemasController : Controller
    {
        private ICinemaService _cinemaService;

        public CinemasController(
            ICinemaService cinemaService
        )
        {
            _cinemaService = cinemaService;
        }

        [HttpPost]
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

        [HttpGet]
        public async Task<IActionResult> GetCinemaFilterOptionsAsync()
        {
            CinemaFilterOptionsModel result = await _cinemaService.GetCinemaOptionsAsync();

            CinemaFilterOptionsResponse response = new CinemaFilterOptionsResponse(
                ModelTransformationHelper.ModelListToResponseList(result.Cities).ToArray(),
                ModelTransformationHelper.ModelListToResponseList(result.Cinemas).ToArray()
            );

            return Ok(response);
        }
    }
}
