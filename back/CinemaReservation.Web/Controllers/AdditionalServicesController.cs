﻿using System.Collections.Generic;
using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace CinemaReservation.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdditionalServicesController : Controller
    {
        private IAdditionalServicesService _additionalServicesService;

        public AdditionalServicesController(
            IAdditionalServicesService additionalServicesService
        )
        {
            _additionalServicesService = additionalServicesService;
        }

        [HttpPost]
        public async Task<IActionResult> AddAdditionalServicesAsync(UpsertAdditionalServiceRequest addAdditionalServiceRequest)
        {
            UpsertItemResultStatus resultStatus = await _additionalServicesService.UpsertAdditionalServiceAsync(new ServiceModel(
                addAdditionalServiceRequest.Id,
                addAdditionalServiceRequest.Name
            ));

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("ServiceAdded successfully");
            }

            return Conflict("Unique index error");
        }

        [HttpPut]
        public async Task<IActionResult> EditAdditionalServicesAsync(UpsertAdditionalServiceRequest editAdditionalServiceRequest)
        {
            UpsertItemResultStatus resultStatus = await _additionalServicesService.UpsertAdditionalServiceAsync(new ServiceModel(
                editAdditionalServiceRequest.Id,
                editAdditionalServiceRequest.Name
            ));

            if (resultStatus == UpsertItemResultStatus.Ok)
            {
                return Ok("ServiceAdded successfully");
            }

            return Conflict("Unique index error");
        }

        [HttpGet]
        public async Task<IActionResult> GetServiceOptionsAsync()
        {
            List<FilterOptionModel> result = await _additionalServicesService.GetServiceOptionsAsync();

            return Ok(result.GetOptionsModelListToResponseArray());
        }
    }
}
