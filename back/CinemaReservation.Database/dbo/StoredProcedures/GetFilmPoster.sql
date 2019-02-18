CREATE PROCEDURE [dbo].[GetFilmPoster]
	@Id int
AS
	SELECT Id as FilmId, PosterUniqueId, PosterImageExtension FROM [dbo].[Films] WHERE Id = @Id
RETURN 0
