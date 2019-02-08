CREATE PROCEDURE [dbo].[GetTopTenFilmsByName]
    @Filter nvarchar(255)
AS
    IF (LEN(@Filter) < 1)
	    SELECT top 10 * FROM [dbo].[Films]
	ELSE
	    SELECT top 10 * FROM [dbo].[Films] WHERE CHARINDEX(LOWER(@Filter), LOWER(Title)) > 0
RETURN 0
