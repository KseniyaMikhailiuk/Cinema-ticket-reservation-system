CREATE PROCEDURE [dbo].[UpsertCity]
    @Id int,
    @Name nvarchar(50)
AS
    Declare @existedCityId int
    Select @existedCityId= Id FROM [dbo].[Cities] AS Cities
        WHERE Cities.Name = @Name
    IF (@existedCityId IS NULL)
    BEGIN
        INSERT INTO [dbo].[Cities] (Name) VALUES (@Name);
		SELECT SCOPE_IDENTITY();
    END
	BEGIN
        SELECT @existedCityId
    END;
RETURN 0
