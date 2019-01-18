using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CinemaReservation.Web.Models
{
    public static class UserRoles
    {
        public static string Admin
        {
            get
            {
                return "admin";
            }
        }

        public static string User
        {
            get
            {
                return "user";
            }
        }
    }
}
