CREATE TABLE [dbo].[seances] (
    [id]            INT      IDENTITY (1, 1) NOT NULL,
    [dateTime]      DATETIME NOT NULL,
    [loveseatPrice] MONEY    NOT NULL,
    [standardPrice] MONEY    NOT NULL,
    [comfortPrice]  MONEY    NOT NULL,
    [filmId]        INT      NOT NULL,
    CONSTRAINT [PK_seances] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_seances_films] FOREIGN KEY ([filmId]) REFERENCES [dbo].[films] ([id])
);

