CREATE TABLE [dbo].[Seances] (
    [Id]            INT      IDENTITY (1, 1) NOT NULL,
    [DateTime]      DATETIME NOT NULL,
    [FilmId]        INT      NOT NULL,
    [HallId]        INT      NOT NULL,
    CONSTRAINT [PK_Seances_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Seances_FilmId_Films_Id] FOREIGN KEY ([FilmId]) REFERENCES [dbo].[Films] ([Id]),
    CONSTRAINT [FK_Seances_HallId_Halls_Id] FOREIGN KEY ([HallId]) REFERENCES [dbo].[Halls] ([Id])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Seances_HallId_DateTime]
    ON [dbo].[Seances]([HallId] ASC, [DateTime] ASC);

