using System;
using System.Collections.Generic;
using System.Text;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class SeatEntity
    {
        public string Type { get; }
        public int Raw { get; }
        public int Line { get; }
        public int HallId { get; }

        public SeatEntity(
            string type,
            int raw,
            int line,
            int hallId
        )
        {
            Type = type;
            Raw = raw;
            Line = line;
            HallId = hallId;
        }

        public SeatEntity(
            string type,
            int raw,
            int line
        )
        {
            Type = type;
            Raw = raw;
            Line = line;
        }
    }
}
