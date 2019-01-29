namespace CinemaReservation.Web.Models
{
    public class FilterOptionItem
    {
        public string Name { get; }
        public int Id { get; }
        public int ParentId { get; }

        public FilterOptionItem(
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
