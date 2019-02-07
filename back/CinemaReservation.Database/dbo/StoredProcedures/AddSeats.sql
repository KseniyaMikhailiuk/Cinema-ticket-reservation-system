CREATE PROCEDURE [dbo].[AddSeats]
    @Raw int,
    @Line int,
    @SeatTypeId int,
    @HallId int
AS
    INSERT INTO [dbo].[Seats] (Raw, Line, SeatTypeId, HallId)
    VALUES (@Raw, @Line, @SeatTypeId, @HallId)
RETURN 0
