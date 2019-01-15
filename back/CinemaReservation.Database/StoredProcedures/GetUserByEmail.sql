CREATE PROCEDURE [dbo].[GetUserByEmail]
	@Email nvarchar
AS
	SELECT *
	FROM Users
	WHERE Email=@Email
