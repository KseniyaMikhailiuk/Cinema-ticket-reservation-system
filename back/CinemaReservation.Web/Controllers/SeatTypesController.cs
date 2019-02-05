﻿using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
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
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetSeatTypes()
        {
            List<OptionModel> result = await _seatTypesService.GetOptions();

            return Ok(result.GetOptionsResponseArray());
        }
    }
}
