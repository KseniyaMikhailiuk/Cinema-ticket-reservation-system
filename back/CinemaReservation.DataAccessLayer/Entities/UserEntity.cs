namespace CinemaReservation.DataAccessLayer.Entities
{
    public class UserEntity
    {
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
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] Salt { get; set; }
        public bool IsAdmin { get; set; }
    }
}
