namespace CinemaReservation.DataAccessLayer.Entities
{
    public class NameIdEntity
    {
        public int Id { get; }
        public int ParentId { get; }
        public string Name { get; }

        public NameIdEntity(
            string name,
            int id,
            int parentId
        )
        {
            Name = name;
            Id = id;
            ParentId = parentId;
        }

        public NameIdEntity(
            string name,
            int id
        )
        {
            Name = name;
            Id = id;
        }
    }
}
