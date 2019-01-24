CREATE PROCEDURE [dbo].[RemoveSeats]
	@HallId int
AS
	DELETE FROM [dbo].[Seats] WHERE HallId = @HallId;
RETURN 0
