CREATE PROCEDURE [dbo].[InsertFilmPoster]
    @FilmId int,
    @PosterUnuqueId uniqueidentifier
AS
    UPDATE [dbo].Films SET PosterImageId = @PosterUnuqueId WHERE Id = @FilmId;
RETURN 0
