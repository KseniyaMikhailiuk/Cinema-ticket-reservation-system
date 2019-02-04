namespace CinemaReservation.DataAccessLayer.Entities
{
    public class OptionNameIdEntity
    {
        public int Id { get; }
        public int ParentId { get; }
        public string Name { get; }

        public OptionNameIdEntity(
            string name,
            int id,
            int parentId
        )
        {
            Name = name;
            Id = id;
            ParentId = parentId;
        }

        public OptionNameIdEntity(
            string name,
            int id
        )
        {
            Name = name;
            Id = id;
        }
    }
}
