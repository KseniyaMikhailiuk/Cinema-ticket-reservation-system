CREATE PROCEDURE [dbo].[CreateUser]
	@Name nvarchar,
	@Surname nvarchar,
	@Email nvarchar,
	@PasswordHash binary(256),
	@Salt binary(64)
AS
	INSERT INTO Users (Name, Surname, Email, PasswordHash, Salt)
	VALUES (@Name, @Surname, @Email, @PasswordHash, @Salt)
RETURN
	SELECT Id FROM Users WHERE Email = @Email
