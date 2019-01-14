CREATE TABLE [dbo].[halls] (
    [id]         INT IDENTITY (1, 1) NOT NULL,
    [number]     INT NOT NULL,
    [cinemaId]   INT NOT NULL,
    [seatAmount] INT NOT NULL,
    CONSTRAINT [PK_halls] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_halls_cinemas] FOREIGN KEY ([cinemaId]) REFERENCES [dbo].[cinemas] ([id])
);

