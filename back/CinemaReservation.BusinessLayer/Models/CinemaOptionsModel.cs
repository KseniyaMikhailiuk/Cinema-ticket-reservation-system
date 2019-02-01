using System.Collections.Generic;

namespace CinemaReservation.BusinessLayer.Models
{
    public class CinemaOptionsModel
    {
        public List<OptionModel> Cities { get; }
        public List<OptionModel> Cinemas { get; }

        public CinemaOptionsModel(
            List<OptionModel> cities,
            List<OptionModel> cinemas
        )
        {
            Cities = cities;
            Cinemas = cinemas;
        }
    }
}
