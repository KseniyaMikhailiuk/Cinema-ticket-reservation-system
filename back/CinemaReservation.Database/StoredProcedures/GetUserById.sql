CREATE PROCEDURE [dbo].[GetUserById]
	@Email nvarchar
AS
	SELECT *
	FROM Users
	WHERE Email=@Email