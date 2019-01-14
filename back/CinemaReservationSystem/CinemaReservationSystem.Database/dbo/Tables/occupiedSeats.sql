CREATE TABLE [dbo].[occupiedSeats] (
    [id]         INT IDENTITY (1, 1) NOT NULL,
    [seanceId]   INT NOT NULL,
    [seatId]     INT NOT NULL,
    [isSelected] BIT NOT NULL,
    [isOccupied] BIT NOT NULL,
    CONSTRAINT [PK_occupiedSeats] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_occupiedSeats_seances] FOREIGN KEY ([seanceId]) REFERENCES [dbo].[seances] ([id]),
    CONSTRAINT [FK_occupiedSeats_seats] FOREIGN KEY ([seatId]) REFERENCES [dbo].[seats] ([id])
);

