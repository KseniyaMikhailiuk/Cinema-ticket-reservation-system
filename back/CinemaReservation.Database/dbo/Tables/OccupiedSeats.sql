CREATE TABLE [dbo].[OccupiedSeats] (
    [Id]         INT IDENTITY (1, 1) NOT NULL,
    [SeanceId]   INT NOT NULL,
    [SeatId]     INT NOT NULL,
    [IsSelected] BIT NOT NULL,
    [IsOccupied] BIT NOT NULL,
    [UserId]     INT NOT NULL,
    [SelectionDatetime] DATETIME NOT NULL,
    CONSTRAINT [PK_OccupiedSeats_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_OccupiedSeats_SeanceId_Seances_Id] FOREIGN KEY ([SeanceId]) REFERENCES [dbo].[Seances] ([Id]),
    CONSTRAINT [FK_OccupiedSeats_SeatId_Seats_Id] FOREIGN KEY ([SeatId]) REFERENCES [dbo].[Seats] ([Id]),
    CONSTRAINT [FK_OccupiedSeats_UserId_Users_Id] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id])
);

GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_OccupiedSeats_SeanceId_SeatId]
    ON [dbo].[OccupiedSeats]([SeanceId] ASC, [SeatId] ASC);