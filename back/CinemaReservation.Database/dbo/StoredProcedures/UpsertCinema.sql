CREATE PROCEDURE [dbo].[UpsertCinema]
    @Id int,
    @Name nvarchar(50),
    @CityId int
AS
BEGIN
    MERGE [dbo].[Cinemas] AS Target
    USING
        (SELECT @Id, @Name, @CityId)
    AS Source
        (Id, Name, CityId)
    ON (Source.Id = Target.Id)
    WHEN MATCHED THEN
        UPDATE SET
            Target.Name = Source.Name,
            Target.CityId = Source.CityId

    WHEN NOT MATCHED BY TARGET THEN
        INSERT (Name, CityId)
        VALUES (@Name, @CityId);
    SELECT ISNULL (SCOPE_IDENTITY(), @Id)
END;
RETURN 0