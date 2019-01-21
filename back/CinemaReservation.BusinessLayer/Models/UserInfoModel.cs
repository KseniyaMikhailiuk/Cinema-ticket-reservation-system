using System;
using System.Collections.Generic;
using System.Text;

namespace CinemaReservation.BusinessLayer.Models
{
    public class UserInfoModel
    {
        public int Id { get; }
        public string Name { get; }
        public string Surname { get; }
        public string Email { get; }
        public bool IsAdmin { get; }

        public UserInfoModel(
            int id,
            string name,
            string surname,
            string email,
            bool isAdmin
        )
        {
            Id = id;
            Name = name;
            Surname = surname;
            Email = email;
            IsAdmin = isAdmin;
        }
    }
}
