using System;

namespace CinemaReservation.DataAccessLayer.Entities
{
    public class SeanceEntity
    {
        public int Id { get; }
        public DateTime DateTime { get; }
        public int FilmId { get; }
        public int HallId { get; }

        public SeanceEntity(
            DateTime dateTime,
            int filmId,
            int hallId
        )
        {
            DateTime = dateTime;
            FilmId = filmId;
            HallId = hallId;
        }

        public SeanceEntity(
            int id,
            DateTime dateTime,
            int filmId,
            int hallId
        )
        {
            Id = id;
            DateTime = dateTime;
            FilmId = filmId;
            HallId = hallId;
        }
    }
}
