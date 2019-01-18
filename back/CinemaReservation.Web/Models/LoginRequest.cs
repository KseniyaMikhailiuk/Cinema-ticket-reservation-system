using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class LoginRequest
    {
        [Required]
        [EmailAddress]
        public string Email { get; }

        [Required]
        [MinLength(8)]
        public string Password { get; }

        public LoginRequest(
            string email,
            string password
        )
        {
            Email = email;
            Password = password;
        }
    }
}
