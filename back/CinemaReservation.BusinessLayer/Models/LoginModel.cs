namespace CinemaReservation.BusinessLayer.Models
{
    public class LoginModel
    {
        public string Email { get; }
        public string Password { get; }

        public LoginModel(
            string email,
            string password
        )
        {
            Email = email;
            Password = password;
        }
    }
}
