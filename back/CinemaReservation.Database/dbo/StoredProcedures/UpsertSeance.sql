CREATE PROCEDURE [dbo].[UpsertSeance]
    @Id int,
    @DateTime datetime,
    @FilmId int,
    @HallId int
AS
BEGIN
    DECLARE
        @FilmDuration time
    SELECT @FilmDuration = (FilmDuration)
        FROM [dbo].[Films]
        WHERE (Id = @FilmId)
    DECLARE
        @FilmEndTime datetime
    SELECT @FilmEndTime = DATEADD(hour, datepart(hour, @FilmDuration), @DateTime)
    SELECT @FilmEndTime = DATEADD(minute, datepart(minute, @FilmDuration), @DateTime)

    DECLARE
        @ExistedSeanceId int

    IF EXISTS (Select * FROM [dbo].[Seances] AS Seances
        INNER JOIN [dbo].[Films] AS Films
        ON Films.Id = @FilmId
        WHERE
            (DATEADD(
                minute,
                datepart(minute, @FilmDuration),
                DATEADD(
                    hour,
                    datepart(hour, Films.FilmDuration),
                    Seances.DateTime)
            ) > @DateTime
            AND
            Seances.DateTime < @FilmEndTime)
            AND
            Seances.Id != @Id)

    BEGIN
        RAISERROR('Seance at this time already exists', 16, 1)
    END


    MERGE [dbo].[Seances] AS Target
    USING
        (SELECT @Id, @DateTime, @FilmId, @HallId)
    AS Source
        (Id, DateTime, FilmId, HallId)
    ON (Source.Id = Target.Id)
    WHEN MATCHED THEN
        UPDATE SET
            Target.DateTime = Source.DateTime

    WHEN NOT MATCHED BY TARGET THEN
        INSERT (DateTime, FilmId, HallId)
        VALUES (
            Source.DateTime,
            Source.FilmId,
            Source.HallId
        );
    SELECT ISNULL (SCOPE_IDENTITY(), @Id)
END;
