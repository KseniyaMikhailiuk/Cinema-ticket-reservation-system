CREATE TABLE [dbo].[seats] (
    [id]       INT        IDENTITY (1, 1) NOT NULL,
    [line]     INT        NOT NULL,
    [raw]      INT        NOT NULL,
    [seatType] NCHAR (10) NOT NULL,
    [hallId]   INT        NOT NULL,
    CONSTRAINT [PK_seats] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_seats_halls] FOREIGN KEY ([hallId]) REFERENCES [dbo].[halls] ([id])
);

