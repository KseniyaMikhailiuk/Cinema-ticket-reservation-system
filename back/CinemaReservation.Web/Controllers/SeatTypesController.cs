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
    [Route("api/seat-types")]
    public class SeatTypesController : Controller
    {
        private ISeatTypesService _seatTypesService;

        public SeatTypesController(
            ISeatTypesService seatTypesService
        )
        {
            _seatTypesService = seatTypesService;
        }

        [HttpGet]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> GetSeatTypes()
        {
            IReadOnlyCollection<SeatTypeModel> result = await _seatTypesService.GetOptions();

            return Ok(result.Adapt<SeatType[]>());
        }
    }
}
