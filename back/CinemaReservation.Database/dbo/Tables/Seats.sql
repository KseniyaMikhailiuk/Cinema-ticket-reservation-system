CREATE TABLE [dbo].[Seats] (
    [Id]         INT IDENTITY (1, 1) NOT NULL,
    [Line]       INT NOT NULL,
    [Raw]        INT NOT NULL,
    [SeatTypeId] INT NOT NULL,
    [HallId]     INT NOT NULL,
    CONSTRAINT [PK_Seats_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Seats_HallId_Halls_Id] FOREIGN KEY ([HallId]) REFERENCES [dbo].[Halls] ([Id]),
    CONSTRAINT [FK_Seats_SeatTypeId_SeatTypes_Id] FOREIGN KEY ([SeatTypeId]) REFERENCES [dbo].[SeatTypes] ([Id])
);

GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Seats_Line_Raw_HallId]
    ON [dbo].[Seats]([Line] ASC, [Raw] ASC, [HallId] ASC);