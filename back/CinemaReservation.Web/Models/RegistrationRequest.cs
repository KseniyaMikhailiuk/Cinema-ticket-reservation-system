using System.ComponentModel.DataAnnotations;

namespace CinemaReservation.Web.Models
{
    public class RegistrationRequest
    {
        [Required]
        public string Name { get; }

        [Required]
        public string Surname { get; }

        [Required]
        [EmailAddress]
        public string Email { get; }

        [Required]
        [MinLength(8)]
        public string Password { get; }

        public RegistrationRequest(
            string name,
            string surname,
            string email,
            string password
        )
        {
            Name = name;
            Surname = surname;
            Email = email;
            Password = password;
        }
    }
}
