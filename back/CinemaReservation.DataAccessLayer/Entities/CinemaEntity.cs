using System;
using System.Collections.Generic;
using System.Text;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class CinemaEntity
    {
        public int Id { get; }
        public string Name { get; }
        public string City { get; }
        public OperationResultStatus OperationResultStatus { get; }

        public CinemaEntity(
            int id,
            string name,
            string city
        )
        {
            Id = id;
            Name = name;
            City = city;
        }

        public CinemaEntity(
            string name,
            string city
        )
        {
            Name = name;
            City = city;
        }

        public CinemaEntity(
            int id,
            OperationResultStatus operationResultStatus
        )
        {
            Id = id;
            OperationResultStatus = operationResultStatus;
        }

        public CinemaEntity(
            OperationResultStatus operationResultStatus
        )
        {
            OperationResultStatus = operationResultStatus;
        }
    }
}
