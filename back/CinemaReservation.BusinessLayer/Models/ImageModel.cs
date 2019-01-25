using Microsoft.AspNetCore.Http;

namespace CinemaReservation.BusinessLayer.Models
{
    public class ImageModel
    {
        public int TargetId { get; }
        public IFormFile FormFile { get; }

        public ImageModel(
            int targetId,
            IFormFile formFile
        )
        {
            TargetId = targetId;
            FormFile = formFile;
        }
    }
}
