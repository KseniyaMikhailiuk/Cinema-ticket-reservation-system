using CinemaReservation.BusinessLayer.Services;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ISecurityService
    {
        byte[] GetHash(string password, byte[] salt);
        PasswordHashAndSalt GetPasswordHashAndSalt(string password);
        bool CheckPasswordCorrectness(byte[] passwordHash, byte[] salt, string passwordToCheck);
    }
}
