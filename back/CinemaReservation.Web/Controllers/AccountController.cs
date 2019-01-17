using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using CinemaReservation.PresentationLayer.Models;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Contracts;

namespace CinemaReservation.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegistrationRequest registrationRequest)
        {
            if (registrationRequest == null)
            {
                return BadRequest();
            }

            RegistrationModel registrationModel = new RegistrationModel(
                registrationRequest.Name,
                registrationRequest.Surname,
                registrationRequest.Email,
                registrationRequest.Password
            );

            AuthorizationResponseModel response = await _accountService.RegisterUserAsync(registrationModel);

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

            return BadRequest("User exists");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest loginRequest)
        {
            if (loginRequest == null)
            {
                return StatusCode(400);
            }

            LoginModel loginModel = new LoginModel(
                loginRequest.Email,
                loginRequest.Password
            );

            AuthorizationResponseModel response = await _accountService.AuthorizeUserAsync(loginModel);

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
