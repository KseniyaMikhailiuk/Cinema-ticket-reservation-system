CREATE PROCEDURE [dbo].[GetUserByEmail]
    @Email nvarchar(255)
AS
    SELECT Id, Name, Surname, Email, PasswordHash, Salt, IsAdmin
    FROM [dbo].[Users]
    WHERE Email = @Email