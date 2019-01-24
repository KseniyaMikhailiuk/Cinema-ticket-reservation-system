CREATE PROCEDURE [dbo].[UpsertCinema]
	@Id int,
	@Name nvarchar(50),
	@City nvarchar(50)
AS
BEGIN
	DECLARE @CityId int
	IF NOT EXISTS ( SELECT 1 FROM [dbo].[Cities] WHERE Name = @City )
	BEGIN
		INSERT INTO [dbo].[Cities] (Name)
		VALUES (@City)
		SELECT @CityId = SCOPE_IDENTITY()
	END
	ELSE
	BEGIN
		SELECT @CityId = Id FROM [dbo].[Cities] WHERE Name = @City
	END

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