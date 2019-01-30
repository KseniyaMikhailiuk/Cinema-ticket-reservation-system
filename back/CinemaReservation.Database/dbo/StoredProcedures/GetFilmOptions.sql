CREATE PROCEDURE [dbo].[GetFilmOptions]
AS
	SELECT DISTINCT Title AS Name, Id FROM [dbo].[Films]
