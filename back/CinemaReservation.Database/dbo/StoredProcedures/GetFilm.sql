CREATE PROCEDURE [dbo].[GetFilm]
	@Id int
AS
	SELECT * FROM [dbo].[Films] WHERE Id = @Id
RETURN 0