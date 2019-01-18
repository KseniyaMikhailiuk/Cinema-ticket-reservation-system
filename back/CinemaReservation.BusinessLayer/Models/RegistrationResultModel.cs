namespace CinemaReservation.BusinessLayer.Models
{
    public class RegistrationResultModel
    {
        public int Id { get; }
        public string Name { get; }
        public string Surname { get; }
        public string Email { get; }
        public bool IsAdmin { get; }
        public bool HasErorMessage { get; }
        public RegistrationResultStatus ResultStatus { get; }

        public RegistrationResultModel(
            int id,
            string name,
            string surname,
            string email,
            RegistrationResultStatus resultStatus,
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

        public RegistrationResultModel(
            RegistrationResultStatus resultStatus
        )
        {
            ResultStatus = resultStatus;
        }
    }
}