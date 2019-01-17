namespace CinemaReservation.DataAccessLayer.Entities
{
    public class UserEntity
    {
        public int Id { get; set; }
        public string Name { get; }
        public string Surname { get; }
        public string Email { get; }
        public byte[] PasswordHash { get; }
        public byte[] Salt { get; }
        public bool IsAdmin { get; }

        public UserEntity(
            int id,
            string name,
            string surname,
            string email,
            byte[] passwordHash,
            byte[] salt,
            bool isAdmin
        )
        {
            Id = id;
            Name = name;
            Surname = surname;
            Email = email;
            PasswordHash = passwordHash;
            Salt = salt;
            IsAdmin = isAdmin;
        }

        public UserEntity(
            string name,
            string surname,
            string email,
            byte[] passwordHash,
            byte[] salt
        )
        {
            Name = name;
            Surname = surname;
            Email = email;
            PasswordHash = passwordHash;
            Salt = salt;
        }
    }
}
