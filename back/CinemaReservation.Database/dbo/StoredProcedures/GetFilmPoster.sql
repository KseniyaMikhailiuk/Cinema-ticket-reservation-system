CREATE PROCEDURE [dbo].[GetFilmPoster]
	@Id int
AS
	SELECT Id as FilmId, PosterImageId as PosterUniqueId FROM [dbo].[Films] WHERE Id = @Id
RETURN 0
