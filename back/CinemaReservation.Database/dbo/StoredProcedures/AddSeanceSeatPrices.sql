CREATE PROCEDURE [dbo].[AddSeanceSeatPrices]
    @ParentId int,
    @ItemId int,
    @Price money
AS
    INSERT INTO [dbo].[SeanceSeatPrice] (SeanceId, SeatTypeId, Price)
    VALUES (@ParentId, @ItemId, @Price)
RETURN 0
