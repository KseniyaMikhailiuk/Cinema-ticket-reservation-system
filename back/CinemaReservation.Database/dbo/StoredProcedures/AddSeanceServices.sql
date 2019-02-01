CREATE PROCEDURE [dbo].[AddSeanceServices]
	@ParentId int,
	@ItemId int,
	@Price money
AS
	INSERT INTO [dbo].[SeanceAdditionalServices] (SeanceId, ServiceId, Price)
	VALUES (@ParentId, @ItemId, @Price)
RETURN 0
