CREATE PROCEDURE [dbo].[CreateUser]
	@Name nvarchar(255),
	@Surname nvarchar(255),
	@Email nvarchar(255),
	@PasswordHash binary(256),
	@Salt binary(128),
	@IsAdmin bit
AS
	INSERT INTO [dbo].[Users] (Name, Surname, Email, PasswordHash, Salt, IsAdmin)
	VALUES (@Name, @Surname, @Email, @PasswordHash, @Salt, @IsAdmin)
	SELECT SCOPE_IDENTITY()
