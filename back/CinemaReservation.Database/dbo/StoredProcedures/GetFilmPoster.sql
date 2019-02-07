CREATE PROCEDURE [dbo].[GetFilmPoster]
	@Id int
AS
	SELECT Id as FilmId, PosterUniqueId FROM [dbo].[Films] WHERE Id = @Id
RETURN 0
