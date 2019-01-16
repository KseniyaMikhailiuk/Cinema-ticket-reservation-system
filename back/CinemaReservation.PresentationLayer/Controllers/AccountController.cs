using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using CinemaReservation.PresentationLayer.Models;
using CinemaReservation.BusinessLayer.Models;
using CinemaReservation.BusinessLayer.Services;
using CinemaReservation.BusinessLayer.Contracts;

namespace CinemaReservation.PresentationLayer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        public AccountController()
        {
            _accountService = new AccountService();
        }

        [HttpPost("register")]
        public async Task<AuthorizationResponse> PostUserAccount(RegistrationRequest registrationRequest)
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
                return new AuthorizationResponse(
                    response.Id,
                    response.Name,
                    response.Surname,
                    response.Email
                );
            }
        }
    }
}
