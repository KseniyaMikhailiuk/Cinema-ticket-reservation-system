using System.Security.Claims;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication;
using System;
using System.Threading.Tasks;
using CinemaReservation.Web.Models;
using System.Linq;

namespace CinemaReservation.Web
{
    public static class AuthorizationExtension
    {
        private const int EXPIRES_MONTH_AMOUNT = 1;

        public static async Task SignInAsync(this HttpContext httpContext, AuthorizationResponse authorizationResponse)
        {
            List<Claim> claims = new List<Claim>()
                {
                    new Claim(ClaimTypes.NameIdentifier, authorizationResponse.Id.ToString()),
                    new Claim(ClaimTypes.Role, authorizationResponse.IsAdmin ? UserRoles.Admin.ToString() : UserRoles.User.ToString())
                };

            await httpContext.SignInAsync(
                CookieAuthenticationDefaults.AuthenticationScheme,
                new ClaimsPrincipal(
                    new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme)
                ),
                new AuthenticationProperties
                {
                    IsPersistent = true,
                    ExpiresUtc = DateTime.UtcNow.AddMonths(EXPIRES_MONTH_AMOUNT)
                }
            );
        }

        public static async Task SignOutAsync(this HttpContext httpContext)
        {
            await httpContext.SignOutAsync(
                CookieAuthenticationDefaults.AuthenticationScheme
            );
        }

        public static int GetUserId(this HttpContext httpContext)
        {
            string userIdStringPresentation = httpContext
                .User
                .Claims
                .FirstOrDefault(x =>
                    x.Type == ClaimTypes.NameIdentifier
                )
                ?.Value;

            return int.Parse(userIdStringPresentation);
        }
    }
}
