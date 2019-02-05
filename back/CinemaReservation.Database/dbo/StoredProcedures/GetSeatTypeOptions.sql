CREATE PROCEDURE [dbo].[GetSeatTypeOptions]
AS
    SELECT Type AS Name, Id FROM [dbo].[SeatTypes]
