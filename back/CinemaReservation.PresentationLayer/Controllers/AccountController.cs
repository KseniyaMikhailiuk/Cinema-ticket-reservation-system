using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using CinemaReservation.PresentationLayer.Models;
using CinemaReservation.DataAccessLayer.Repositories;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Services;
using CinemaReservation.BusinessLayer.Contracts;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace CinemaReservation.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        public AccountController(IConfiguration configuration)
        {
            _accountService = new AccountService(new UserRepository(new DalSettings(configuration)));
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpPost("register")]
        public async Task<IActionResult> PostUserAccount(RegistrationRequest registrationRequest)
        {
            RegistrationModel registrationModel = new RegistrationModel(
                registrationRequest.Name,
                registrationRequest.Surname,
                registrationRequest.Email,
                registrationRequest.Password
            );

            var response = await _accountService.RegisterUser(registrationModel);

            if (response != null)
            {
                return CreatedAtAction("register", new AuthorizationResponse(
                    response.Id,
                    response.Name,
                    response.Surname,
                    response.Email,
                    response.IsAdmin
                ));
            }
            return CreatedAtAction("register", null); ;
        }
    }
}
