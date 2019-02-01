namespace CinemaReservation.BusinessLayer.Models
{
    public class OptionModel
    {
        public string Name { get; }
        public int Id { get; }
        public int ParentId { get; }

        public OptionModel(
            string name,
            int id,
            int parentId
        )
        {
            Name = name;
            Id = id;
            ParentId = parentId;
        }
    }
}
