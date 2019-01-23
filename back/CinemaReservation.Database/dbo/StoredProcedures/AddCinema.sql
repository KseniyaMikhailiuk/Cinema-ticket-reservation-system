CREATE PROCEDURE [dbo].[AddCinema]
	@Name nvarchar(50),
	@City nvarchar(50)
AS
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

	INSERT INTO [dbo].[Cinemas] (Name, CityId)
	VALUES (@Name, @CityId)
	SELECT SCOPE_IDENTITY()
RETURN 0
