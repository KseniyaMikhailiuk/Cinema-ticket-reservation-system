namespace CinemaReservation.DataAccessLayer.Entities
{
    public  class AdditionalServiceEntity
    {
        public string Name { get; }
        public int Id { get; }

        public AdditionalServiceEntity(
            string name,
            int id
        )
        {
            Name = name;
            Id = id;
        }
    }
}
