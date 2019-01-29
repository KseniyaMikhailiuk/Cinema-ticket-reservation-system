CREATE PROCEDURE [dbo].[GetUniqueHalls]
AS
	SELECT DISTINCT Name, Id, CinemaId As ParentId FROM [dbo].[Halls]
