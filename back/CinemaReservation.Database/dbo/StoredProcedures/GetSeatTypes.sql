CREATE PROCEDURE [dbo].[GetSeatTypes]
AS
    SELECT Type AS Name, Id, WidthScale FROM [dbo].[SeatTypes]