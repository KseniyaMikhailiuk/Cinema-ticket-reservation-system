CREATE PROCEDURE [dbo].[UpsertFilm]
	@Id int,
	@Title nvarchar(50),
	@Description nvarchar(MAX),
	@ReleaseDate date,
	@StartShowingDate date,
	@FinishShowingDate date
AS
BEGIN
    MERGE [dbo].[Films] AS Target
	USING
		(SELECT @Id, @Title, @Description, @ReleaseDate, @StartShowingDate, @FinishShowingDate)
	AS Source
		(Id, Title, Description, ReleaseDate, StartShowingDate, FinishShowingDate)
	ON (Source.Id = Target.Id)
	WHEN MATCHED THEN
		UPDATE SET
			Target.Title = Source.Title,
			Target.Description = Source.Description,
			Target.ReleaseDate = Source.ReleaseDate,
			Target.StartShowingDate = Source.StartShowingDate,
			Target.FinishShowingDate = Source.FinishShowingDate

	WHEN NOT MATCHED BY TARGET THEN
		INSERT (Title, Description, ReleaseDate, StartShowingDate, FinishShowingDate)
		VALUES (
			Source.Title,
			Source.Description,
			Source.ReleaseDate,
			Source.StartShowingDate,
			Source.FinishShowingDate
		);
    SELECT ISNULL (SCOPE_IDENTITY(), @Id)
END;
