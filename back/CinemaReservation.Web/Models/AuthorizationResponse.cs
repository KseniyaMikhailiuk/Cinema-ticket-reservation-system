
namespace CinemaReservation.PresentationLayer.Models
{
    public class AuthorizationResponse
    {
        public AuthorizationResponse(
            int id,
            string name,
            string surname,
            string email,
            bool isAdmin
        )
        {
            Id = id;
            Name = name;
            Surname = surname;
            Email = email;
            IsAdmin = isAdmin;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Email { get; set; }
        public bool IsAdmin { get; set; }
    }
}
