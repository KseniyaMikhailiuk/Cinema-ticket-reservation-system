CREATE PROCEDURE [dbo].[InsertFilmPoster]
    @FilmId int,
    @PosterUniqueId uniqueidentifier,
	@PosterImageExtension nvarchar(10)
AS
    UPDATE [dbo].Films SET
	    PosterUniqueId = @PosterUniqueId,
		PosterImageExtension = @PosterImageExtension
		    WHERE Id = @FilmId;
RETURN 0
