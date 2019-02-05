using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CinemaReservation.Web.Models;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.Web;
using Microsoft.AspNetCore.Authorization;
using Mapster;

namespace CinemaReservation.PresentationLayer.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;


        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }


        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(RegistrationRequest registrationRequest)
        {
            RegistrationModel registrationModel = registrationRequest.Adapt<RegistrationModel>();

            RegistrationResultModel result = await _accountService.RegisterUserAsync(registrationModel);

            if (result.ResultStatus == RegistrationResultStatus.Ok)
            {
                AuthorizationResponse authorizationResponse = result.Adapt<AuthorizationResponse>();

                await HttpContext.SignInAsync(authorizationResponse);

                return Ok(authorizationResponse);
            }

            return BadRequest("User exists");
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(LoginRequest loginRequest)
        {
            LoginModel loginModel = loginRequest.Adapt<LoginModel>();

            AuthorizationResultModel result = await _accountService.AuthorizeUserAsync(loginModel);

            if (result.ResultStatus == AuthorizationResultStatus.Ok)
            {
                AuthorizationResponse authorizationResponse = result.Adapt<AuthorizationResponse>();

                await HttpContext.SignInAsync(authorizationResponse);

                return Ok(authorizationResponse);
            }

            return Unauthorized("Incorrect login data");
        }

        [HttpPost("logout")]
        [Authorize]
        public async Task<IActionResult> LogoutAsync()
        {
            await HttpContext.SignOutAsync();

            return Ok("User unauthorized successfully");
        }

        [HttpGet("getUser")]
        [Authorize]
        public async Task<IActionResult> GetUserAsync()
        {
            int userId = HttpContext.GetUserId();

            UserModel result = await _accountService.GetUserAsync(userId);

            return Ok(result.Adapt<UserResponse>());
        }
    }
}
