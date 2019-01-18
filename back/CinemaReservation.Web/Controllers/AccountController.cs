using System.Threading.Tasks;
using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using CinemaReservation.PresentationLayer.Models;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Contracts;
using CinemaReservation.Web;

namespace CinemaReservation.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private readonly IdentityService _identityHelper;


        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }


        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync(RegistrationRequest registrationRequest)
        {
            RegistrationModel registrationModel = new RegistrationModel(
                registrationRequest.Name,
                registrationRequest.Surname,
                registrationRequest.Email,
                registrationRequest.Password
            );

            RegistrationResultModel result = await _accountService.RegisterUserAsync(registrationModel);

            if (result.ResultStatus == RegistrationResultStatus.Ok)
            {
                AuthorizationResponse authorizationResponse = new AuthorizationResponse(
                    result.Id,
                    result.Name,
                    result.Surname,
                    result.Email,
                    result.IsAdmin
                );

                await _identityHelper.SetCookiesAsync(HttpContext, authorizationResponse);

                return Ok(authorizationResponse);
            }

            return BadRequest("User exists");
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(LoginRequest loginRequest)
        {
            LoginModel loginModel = new LoginModel(
                loginRequest.Email,
                loginRequest.Password
            );

            AuthorizationResultModel result = await _accountService.AuthorizeUserAsync(loginModel);

            if (result.ResultStatus == AuthorizationResultStatus.Ok)
            {
                AuthorizationResponse authorizationResponse = new AuthorizationResponse(
                    result.Id,
                    result.Name,
                    result.Surname,
                    result.Email,
                    result.IsAdmin
                );

                await _identityHelper.SetCookiesAsync(HttpContext, authorizationResponse);

                return Ok(authorizationResponse);
            }

            return Unauthorized("Incorrect login data");
        }

        [HttpPost("logout")]
        public async Task<IActionResult> LogoutAsync()
        {
            await _identityHelper.RemoveCookiesAsync(HttpContext);

            return Ok("User unauthorized successfully");
        }
    }
}
