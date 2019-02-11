using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Exceptions;
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
            try
            {
                int result = await _cityService.UpsertCityAsync(
                    request.Adapt<CityModel>()
                );

                return Ok(
                    result
                );
            }
            catch(ConflictException e)
            {
                return Conflict(e.Message);
            }
        }

        [HttpPut("{Id:int}")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditCinemaAsync(UpsertCinemaRequest request)
        {
            try
            {
                int result = await _cityService.UpsertCityAsync(
                    request.Adapt<CityModel>()
                );

                return Ok(
                    result
                );
            }
            catch (ConflictException e)
            {
                return Conflict(e.Message);
            }
        }

        [HttpGet]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> GetCitiesAsync()
        {
            IReadOnlyCollection<CityModel> result = await _cityService.GetCitiesAsync();

            return Ok(result.Adapt<GetNamesResponse[]>());
        }
    }
}
