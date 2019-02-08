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
    [Route("api/cinemas")]
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
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> AddCinemaAsync(UpsertCinemaRequest request)
        {
            try
            {
                int result = await _cinemaService.UpsertCinemaAsync(
                    request.Adapt<CinemaModel>()
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
                int result = await _cinemaService.UpsertCinemaAsync(
                    request.Adapt<CinemaModel>()
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

        [HttpGet]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> GetCinemaOptionsAsync()
        {
            IReadOnlyCollection<OptionModel> result = await _cinemaService.GetCinemaOptionsAsync();

            return Ok(result.Adapt<OptionItem[]>());
        }
    }
}
