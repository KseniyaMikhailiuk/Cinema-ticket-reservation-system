CREATE PROCEDURE [dbo].[GetHalls]
AS
    SELECT Name, Id, CinemaId As ParentId FROM [dbo].[Halls]
