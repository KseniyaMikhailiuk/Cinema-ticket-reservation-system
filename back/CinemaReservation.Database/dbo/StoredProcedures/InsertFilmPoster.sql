CREATE PROCEDURE [dbo].[InsertFilmPoster]
    @FilmId int,
    @PosterUniqueId uniqueidentifier
AS
    UPDATE [dbo].Films SET PosterUniqueId = @PosterUniqueId WHERE Id = @FilmId;
RETURN 0
