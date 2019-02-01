CREATE PROCEDURE [dbo].[GetServiceOptions]
AS
    SELECT DISTINCT Name, Id FROM [dbo].[Services]
