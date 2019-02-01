namespace CinemaReservation.Web.Models
{
    public class OptionItem
    {
        public string Name { get; }
        public int Id { get; }
        public int ParentId { get; }

        public OptionItem(
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
