using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Models
{
    public class CinemaFilterOptionsModel
    {
        public List<FilterOptionModel> Cities { get; }
        public List<FilterOptionModel> Cinemas { get; }

        public CinemaFilterOptionsModel(
            List<FilterOptionModel> cities,
            List<FilterOptionModel> cinemas
        )
        {
            Cities = cities;
            Cinemas = cinemas;
        }
    }
}
