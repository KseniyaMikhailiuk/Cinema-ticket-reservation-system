CREATE PROCEDURE [dbo].[AddSeats]
	@Raw int,
	@Line int,
	@SeatType nvarchar(50),
	@HallId int
AS
	DECLARE @SeatTypeId int
	SELECT @SeatTypeId = Id FROM [dbo].[SeatTypes] WHERE (Type = @SeatType)
	INSERT INTO [dbo].[Seats] (Raw, Line, SeatTypeId, HallId)
	VALUES (@Raw, @Line, @SeatTypeId, @HallId)
RETURN 0
