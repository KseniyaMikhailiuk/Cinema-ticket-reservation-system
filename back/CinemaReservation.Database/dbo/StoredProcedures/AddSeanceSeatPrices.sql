CREATE PROCEDURE [dbo].[AddSeanceSeatPrices]
    @SeanceId int,
    @Id int,
    @Price money
AS
    INSERT INTO [dbo].[SeanceSeatPrice] (SeanceId, SeatTypeId, Price)
    VALUES (@SeanceId, @Id, @Price)
RETURN 0
