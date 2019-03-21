CREATE PROCEDURE [dbo].[AddSeanceServices]
    @SeanceId int,
    @Id int,
    @Price money
AS
    INSERT INTO [dbo].[SeanceAdditionalServices] (SeanceId, ServiceId, Price)
    VALUES (@SeanceId, @Id, @Price)
RETURN 0
