namespace CinemaReservation.DataAccessLayer.Entities
{
    public class UserRegistrationEntity
    {
        public string Name { get; }
        public string Surname { get; }
        public string Email { get; }
        public byte[] PasswordHash { get; }
        public byte[] Salt { get; }
        public bool IsAdmin { get; }

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
    }
}
