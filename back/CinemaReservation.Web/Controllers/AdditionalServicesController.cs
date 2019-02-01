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
        public async Task<IActionResult> AddAdditionalServicesAsync(UpsertAdditionalServiceRequest upsertAdditionalServiceRequest)
        {
            UpsertItemResultStatus resultStatus = await _additionalServicesService.AddAdditionalServiceAsync(new ServiceModel(
                upsertAdditionalServiceRequest.Name
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

            return Ok(ModelTransformationHelper.ModelListToResponseList(result).ToArray());
        }
    }
}
