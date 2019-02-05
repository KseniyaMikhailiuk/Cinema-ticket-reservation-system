CREATE PROCEDURE [dbo].[GetServiceOptions]
AS
    SELECT Name, Id FROM [dbo].[Services]
