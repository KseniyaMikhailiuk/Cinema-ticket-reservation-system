using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Mapster;
using CinemaReservation.BusinessLayer.Exceptions;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/additional-services")]
    [ApiController]
    public class AdditionalServicesController : Controller
    {
        private IAdditionalServiceService _additionalServicesService;

        public AdditionalServicesController(
            IAdditionalServiceService additionalServicesService
        )
        {
            _additionalServicesService = additionalServicesService;
        }

        [HttpPost]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> AddAdditionalServicesAsync(UpsertAdditionalServiceRequest request)
        {
            try
            {
                await _additionalServicesService
                    .UpsertAdditionalServiceAsync(
                        request.Adapt<ServiceModel>()
                    );

                return Ok("");
            }
            catch(ConflictException e)
            {
                return Conflict(e.Message);
            }
        }

        [HttpPut("{Id:int}")]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> EditAdditionalServicesAsync(UpsertAdditionalServiceRequest request)
        {
            try
            {
                await _additionalServicesService
                .UpsertAdditionalServiceAsync(
                    request.Adapt<ServiceModel>()
                );
                return Ok();
            }
            catch (ConflictException e)
            {
                return Conflict(e.Message);
            }
        }

        [HttpGet]
        [Authorize(Roles = nameof(UserRoles.Admin))]
        public async Task<IActionResult> GetServiceOptionsAsync()
        {
            List<OptionModel> result = await _additionalServicesService.GetServiceOptionsAsync();

            return Ok(result.Adapt<OptionItem[]>());
        }
    }
}
