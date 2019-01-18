using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;
using System;
using System.Threading.Tasks;
using CinemaReservation.Web.Models;

namespace CinemaReservation.Web
{
    public class IdentityService
    {

        private int EXPIRES_MONTH_AMOUNT = 1;

        public async Task SetCookiesAsync(HttpContext httpContext, AuthorizationResponse authorizationResponse)
        {
            await httpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(
                    GetAuthorizationClaims(authorizationResponse)
                ),
                new AuthenticationProperties
                {
                    IsPersistent = true,
                    ExpiresUtc = DateTime.UtcNow.AddMonths(EXPIRES_MONTH_AMOUNT)
                }
            );
        }

        public async Task RemoveCookiesAsync(HttpContext httpContext)
        {
            await httpContext.SignOutAsync(
                CookieAuthenticationDefaults.AuthenticationScheme
            );
        }


        private static ClaimsIdentity GetAuthorizationClaims(AuthorizationResponse authorizationResponse)
        {
            List<Claim> claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Email, authorizationResponse.Email),
                new Claim(ClaimTypes.Role, authorizationResponse.IsAdmin ? UserRoles.Admin : UserRoles.User)
            };

            return new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
        }
    }
}
