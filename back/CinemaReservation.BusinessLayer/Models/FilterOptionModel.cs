namespace CinemaReservation.BusinessLayer.Models
{
    public class FilterOptionModel
    {
        public string Name { get; }
        public int Id { get; }
        public int ParentId { get; }

        public FilterOptionModel(
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
