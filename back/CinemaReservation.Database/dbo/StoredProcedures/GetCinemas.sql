CREATE PROCEDURE [dbo].[GetCinemas]
AS
    SELECT Name, Id, CityId As ParentId FROM [dbo].[Cinemas]
