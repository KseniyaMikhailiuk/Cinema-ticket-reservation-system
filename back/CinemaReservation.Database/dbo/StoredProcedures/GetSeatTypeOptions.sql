CREATE PROCEDURE [dbo].[GetSeatTypeOptions]
AS
    SELECT DISTINCT Type AS Name, Id FROM [dbo].[SeatTypes]
