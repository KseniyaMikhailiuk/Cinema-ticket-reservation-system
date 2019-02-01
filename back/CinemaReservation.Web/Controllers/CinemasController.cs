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
            UpsertItemResultStatusAndId cinemaResultModel = await _cinemaService.UpsertCinemaAsync(
                new CinemaModel(
                    addCinemaRequest.Id,
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

        [HttpPut("{Id:int}")]
        public async Task<IActionResult> EditCinemaAsync(UpsertCinemaRequest editCinemaRequest)
        {
            UpsertItemResultStatusAndId cinemaResultModel = await _cinemaService.UpsertCinemaAsync(
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
            CinemaOptionsModel result = await _cinemaService.GetCinemaOptionsAsync();

            CinemaOptionsResponse response = new CinemaOptionsResponse(
                result.Cities.GetOptionsModelListToResponseArray(),
                result.Cinemas.GetOptionsModelListToResponseArray()
            );

            return Ok(response);
        }
    }
}
