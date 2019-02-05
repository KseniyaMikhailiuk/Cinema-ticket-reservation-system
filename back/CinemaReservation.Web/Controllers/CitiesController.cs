using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Mapster;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/cities")]
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
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> AddСityAsync(UpsertCityRequest request)
        {
            UpsertItemResultStatusAndId cityResultModel = await _cityService.UpsertCityAsync(
                request.Adapt<CityModel>()
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
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditCinemaAsync(UpsertCinemaRequest request)
        {
            UpsertItemResultStatusAndId cinemaResultModel = await _cityService.UpsertCityAsync(
                request.Adapt<CityModel>()
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
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> GetCityOptionsAsync()
        {
            List<OptionModel> result = await _cityService.GetCityOptionsAsync();

            return Ok(result.Adapt<OptionItem[]>());
        }
    }
}
