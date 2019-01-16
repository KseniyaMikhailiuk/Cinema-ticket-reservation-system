namespace CinemaReservation.DataAccessLayer.Entities
{
    public class UserRegistrationEntity
    {
        public UserRegistrationEntity(
            string name,
            string surname,
            string email,
            byte[] passwordHash,
            byte[] salt,
            bool isAdmin
        )
        {
            Name = name;
            Surname = surname;
            Email = email;
            PasswordHash = passwordHash;
            Salt = salt;
            isAdmin = false;
        }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] Salt { get; set; }
        public bool IsAdmin { get; set; }
    }
}
