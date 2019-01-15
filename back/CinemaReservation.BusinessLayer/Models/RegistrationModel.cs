namespace CinemaReservation.BusinessLayer.Models
{
    public class RegistrationModel
    {
        public RegistrationModel(string name, string surname, string email, string password)
        {
            Name = name;
            Surname = surname;
            Email = email;
            Password = password;
        }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
