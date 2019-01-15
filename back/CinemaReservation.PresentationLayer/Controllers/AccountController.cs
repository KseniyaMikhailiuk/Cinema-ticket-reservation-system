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

        [HttpPost]
        public async Task<ActionResult<RegistrationRequest>> PostUserAccount(RegistrationRequest registrationRequest)
        {
            RegistrationModel registrationModel = new RegistrationModel(
                registrationRequest.Name,
                registrationRequest.Surname,
                registrationRequest.Email,
                registrationRequest.Password);
            await _accountService.RegisterUser(registrationModel);
        }
    }
}
