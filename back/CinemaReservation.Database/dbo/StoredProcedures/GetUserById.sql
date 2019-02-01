CREATE PROCEDURE [dbo].[GetUserById]
    @Id int
AS
    SELECT Id, Name, Surname, Email, PasswordHash, Salt, IsAdmin
    FROM [dbo].[Users]
    WHERE Id = @Id
