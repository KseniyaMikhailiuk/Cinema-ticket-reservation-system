namespace CinemaReservation.DataAccessLayer.Entities
{
    public class UserLoginEntity
    {
        public UserLoginEntity(
            string email,
            string password
        )
        {
            Email = email;
            Password = password;
        }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
