CREATE PROCEDURE [dbo].[InsertFilmPoster]
    @FilmId int,
    @PosterUniqueId uniqueidentifier
AS
    UPDATE [dbo].Films SET PosterImageId = @PosterUniqueId WHERE Id = @FilmId;
RETURN 0
