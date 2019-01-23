CREATE PROCEDURE [dbo].[AddHall]
	@Name nvarchar(50),
	@CinemaId int
AS
	INSERT INTO [dbo].[Halls] (Name, CinemaId)
	VALUES (@Name, @CinemaId)
	SELECT SCOPE_IDENTITY()
RETURN 0
