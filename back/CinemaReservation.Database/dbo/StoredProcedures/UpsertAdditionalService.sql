CREATE PROCEDURE [dbo].[UpsertAdditionalService]
	@Name nvarchar(50),
	@Id int
AS
BEGIN
    MERGE [dbo].[Services] AS Target
	USING
		(SELECT @Id, @Name)
	AS Source
		(Id, Name)
	ON (Source.Id = Target.Id)
	WHEN MATCHED THEN
		UPDATE SET
			Target.Name = Source.Name

	WHEN NOT MATCHED BY TARGET THEN
		INSERT (Name)
		VALUES (
			Source.Name
		);
    SELECT ISNULL (SCOPE_IDENTITY(), @Id)
END;
