CREATE PROCEDURE [dbo].[UpsertHall]
	@Id int,
	@Name nvarchar(50),
	@CinemaId int
AS
BEGIN
    MERGE [dbo].[Halls] AS Target
	USING
		(SELECT @Id, @Name, @CinemaId)
	AS Source
		(Id, Name, CinemaId)
	ON (Source.Id = Target.Id)
	WHEN MATCHED THEN
		UPDATE SET
			Target.Name = Source.Name

	WHEN NOT MATCHED BY TARGET THEN
		INSERT (Name, CinemaId)
		VALUES (
			Source.Name,
			Source.CinemaId
		);
    SELECT ISNULL (SCOPE_IDENTITY(), @Id)
END;
