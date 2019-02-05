CREATE PROCEDURE [dbo].[GetFilmOptions]
AS
    SELECT Title AS Name, Id FROM [dbo].[Films]
