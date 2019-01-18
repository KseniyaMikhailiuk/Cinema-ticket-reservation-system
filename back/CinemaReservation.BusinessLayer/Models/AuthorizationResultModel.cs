namespace CinemaReservation.BusinessLayer.Models
{
    public class AuthorizationResultModel
    {
        public int Id { get; }
        public string Name { get; }
        public string Surname { get; }
        public string Email { get; }
        public bool IsAdmin { get; }
        public bool HasErorMessage { get; }
        public AuthorizationResultStatus ResultStatus { get; }

        public AuthorizationResultModel(
            int id,
            string name,
            string surname,
            string email,
            AuthorizationResultStatus resultStatus,
            bool isAdmin
        )
        {
            Id = id;
            Name = name;
            Surname = surname;
            Email = email;
            ResultStatus = resultStatus;
            IsAdmin = isAdmin;
        }

        public AuthorizationResultModel(
            AuthorizationResultStatus resultStatus
        )
        {
            ResultStatus = resultStatus;
        }
    }
}
