CREATE TABLE [dbo].[SeanceSeatPrice] (
    [Id]         INT   IDENTITY (1, 1) NOT NULL,
    [SeanceId]   INT   NOT NULL,
    [SeatTypeId] INT   NOT NULL,
    [Price]      MONEY NOT NULL,
    CONSTRAINT [PK_SeanceSeatPrice_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_SeanceSeatPrice_SeanceId_Seances_Id] FOREIGN KEY ([SeanceId]) REFERENCES [dbo].[Seances] ([Id]),
    CONSTRAINT [FK_SeanceSeatPrice_SeatTypeId_SeatTypes_Id] FOREIGN KEY ([SeatTypeId]) REFERENCES [dbo].[SeatTypes] ([Id])
);

GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_SeanceSeatPrice_SeanceId_SeatTypeId]
    ON [dbo].[SeanceSeatPrice]([SeanceId] ASC, [SeatTypeId] ASC);