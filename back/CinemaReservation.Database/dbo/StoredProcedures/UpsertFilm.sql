CREATE PROCEDURE [dbo].[UpsertFilm]
    @Id int,
    @Title nvarchar(50),
    @PosterUniqueId uniqueidentifier,
    @Description nvarchar(MAX),
    @ReleaseDate date,
    @StartShowingDate date,
    @FinishShowingDate date,
    @FilmDuration time(7)
AS
BEGIN
    MERGE [dbo].[Films] AS Target
    USING
        (SELECT @Id, @Title, @Description, @ReleaseDate, @StartShowingDate, @FinishShowingDate, @FilmDuration)
    AS Source
        (Id, Title, Description, ReleaseDate, StartShowingDate, FinishShowingDate, FilmDuration)
    ON (Source.Id = Target.Id)
    WHEN MATCHED THEN
        UPDATE SET
            Target.Title = Source.Title,
            Target.Description = Source.Description,
            Target.ReleaseDate = Source.ReleaseDate,
            Target.StartShowingDate = Source.StartShowingDate,
            Target.FinishShowingDate = Source.FinishShowingDate,
            Target.FilmDuration = Source.FilmDuration

    WHEN NOT MATCHED BY TARGET THEN
        INSERT (Title, Description, ReleaseDate, StartShowingDate, FinishShowingDate, FilmDuration)
        VALUES (
            Source.Title,
            Source.Description,
            Source.ReleaseDate,
            Source.StartShowingDate,
            Source.FinishShowingDate,
            Source.FilmDuration
        );
    SELECT ISNULL (SCOPE_IDENTITY(), @Id)
END;
