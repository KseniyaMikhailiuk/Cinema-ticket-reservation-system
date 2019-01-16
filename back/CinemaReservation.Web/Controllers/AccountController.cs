using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using CinemaReservation.PresentationLayer.Models;
using CinemaReservation.DataAccessLayer.Repositories;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Services;
using CinemaReservation.BusinessLayer.Contracts;
using Microsoft.Extensions.Configuration;

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
                return Ok(new AuthorizationResponse(
                    response.Id,
                    response.Name,
                    response.Surname,
                    response.Email,
                    response.IsAdmin
                ));
            }
            return Forbid();
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginUser(LoginRequest loginRequest)
        {
            LoginModel loginModel = new LoginModel(
                loginRequest.Email,
                loginRequest.Password
            );

            var response = await _accountService.AuthorizeUser(loginModel);

            if (response != null)
            {
                return Ok(new AuthorizationResponse(
                    response.Id,
                    response.Name,
                    response.Surname,
                    response.Email,
                    response.IsAdmin));
            }
            return Unauthorized();
        }
    }
}
