﻿using System.Threading.Tasks;
using CinemaReservation.BusinessLayer.Models;

namespace CinemaReservation.BusinessLayer.Contracts
{
    public interface IAccountService
    {
        Task<AuthorizationResponseModel> RegisterUser(RegistrationModel registrationModel);
        Task<AuthorizationResponseModel> AuthorizeUser(LoginModel loginModel);
    }
}