namespace CinemaReservation.PresentationLayer.Models
{
    public class RegistrationRequest
    {
        public string Name { get; }
        public string Surname { get; }
        public string Email { get; }
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
