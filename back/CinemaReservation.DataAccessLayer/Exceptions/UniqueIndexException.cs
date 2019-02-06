using System;

namespace CinemaReservation.DataAccessLayer.Exceptions
{
    public class UniqueIndexException: Exception
    {
        public UniqueIndexException()
        {
        }

        public UniqueIndexException(string storedProc)
            : base(string.Format("Exception occurrde during execution of stored proc {0}", storedProc))
        {}
        public UniqueIndexException(string storedProc, Exception inner)
            : base(string.Format("Exception occurrde during execution of stored proc {0}. {1}", storedProc, inner.Message), inner)
        {}
    }
}
