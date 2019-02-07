using System;

namespace CinemaReservation.BusinessLayer.Exceptions
{
    public class ConflictException: Exception
    {
        public ConflictException()
        {
        }

        public ConflictException(string message)
            : base(message)
        {
        }

        public ConflictException(Exception inner)
            : base("Data conflict occurred." + inner.Message, inner)
        {
        }
    }
}
