using CinemaReservation.BusinessLayer.Services;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface ISecurityService
    {
        byte[] GetPasswordHash(string password, byte[] salt);
        byte[] GetSalt();
        bool CheckPasswordCorrectness(byte[] passwordHash, byte[] salt, string passwordToCheck);
    }
}
