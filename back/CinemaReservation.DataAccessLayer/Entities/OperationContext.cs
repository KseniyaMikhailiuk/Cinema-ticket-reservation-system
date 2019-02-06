using System;
using System.Data;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class OperationContext: IDisposable
    {
        public IDbConnection Connection { get; }
        public IDbTransaction Transaction { get; }

        public OperationContext(
            IDbConnection connection
        )
        {
            Connection = connection;
            Connection.Open();
            Transaction = Connection.BeginTransaction();
        }

        public void Apply()
        {
            Transaction.Commit();
        }

        public void Dispose()
        {
            if (Transaction != null)
            {
                Transaction.Rollback();
                Transaction.Dispose();
            }
            if (Connection != null)
            {
                Connection.Close();
                Connection.Dispose();
            }
        }
    }
}
