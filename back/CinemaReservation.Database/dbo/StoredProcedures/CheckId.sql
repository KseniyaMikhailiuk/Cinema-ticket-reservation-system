CREATE PROCEDURE [dbo].[CheckId]
	@Id int,
	@TableName nvarchar(50)
AS
BEGIN
    DECLARE @ActualTableName AS nvarchar(50)

    SELECT @ActualTableName = QUOTENAME( TABLE_NAME )
    FROM INFORMATION_SCHEMA.TABLES
    WHERE TABLE_NAME = @TableName

    DECLARE @sql AS NVARCHAR(MAX)
    SELECT @sql ='SELECT CASE WHEN EXISTS (
			SELECT *
			FROM '+ @ActualTableName + 'WHERE Id = ' + CONVERT(varchar(50), @Id) + '
		)
		THEN CAST(1 AS BIT)
		ELSE CAST(0 AS BIT) END'

    EXEC(@SQL)
END
