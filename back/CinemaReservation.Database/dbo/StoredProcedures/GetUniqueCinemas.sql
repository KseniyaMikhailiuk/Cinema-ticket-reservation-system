CREATE PROCEDURE [dbo].[GetUniqueCinemas]
AS
	SELECT DISTINCT Name, Id, CityId As ParentId FROM [dbo].[Cinemas]
