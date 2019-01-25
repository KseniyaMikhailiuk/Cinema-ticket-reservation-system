using Microsoft.AspNetCore.Http;

namespace CinemaReservation.Web.Models
{
    public class AddImageRequest
    {
        public IFormFile FormFile { get; }
        public int TargetId { get; }

        public AddImageRequest(
            IFormFile formFile,
            int targetId
        )
        {
            FormFile = formFile;
            TargetId = targetId;
        }
    }
}
