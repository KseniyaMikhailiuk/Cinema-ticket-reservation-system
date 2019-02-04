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
    public class CitiesController : Controller
    {
        private ICityService _cityService;

        public CitiesController(
            ICityService cityService
        )
        {
            _cityService = cityService;
        }

        [HttpPost]
        public async Task<IActionResult> AddСityAsync(UpsertCityRequest addCityRequest)
        {
            UpsertItemResultStatusAndId cityResultModel = await _cityService.UpsertCityAsync(
                new CityModel(
                    addCityRequest.Id,
                    addCityRequest.Name
                )
            );

            if (cityResultModel.UpsertItemResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(
                    cityResultModel.Id
                );
            }

            return Conflict("City exists");
        }

        [HttpPut("{Id:int}")]
        public async Task<IActionResult> EditCinemaAsync(UpsertCinemaRequest editCinemaRequest)
        {
            UpsertItemResultStatusAndId cinemaResultModel = await _cityService.UpsertCityAsync(
                new CityModel(
                    editCinemaRequest.Id,
                    editCinemaRequest.Name
                )
            );

            if (cinemaResultModel.UpsertItemResultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok(
                    cinemaResultModel.Id
                );
            }

            return Conflict("City exists");
        }

        [HttpGet]
        public async Task<IActionResult> GetCityOptionsAsync()
        {
            List<OptionModel> result = await _cityService.GetCityOptionsAsync();

            return Ok(result.GetOptionsResponseArray());
        }
    }
}
