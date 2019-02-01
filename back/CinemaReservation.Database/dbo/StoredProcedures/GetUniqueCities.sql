CREATE PROCEDURE [dbo].[GetUniqueCities]
AS
    SELECT DISTINCT Name, Id FROM [dbo].[Cities]
