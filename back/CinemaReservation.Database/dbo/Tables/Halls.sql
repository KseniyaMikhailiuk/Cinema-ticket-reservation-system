CREATE TABLE [dbo].[Halls] (
    [Id]       INT           IDENTITY (1, 1) NOT NULL,
    [Name]     NVARCHAR (50) NOT NULL,
    [CinemaId] INT           NOT NULL,
    CONSTRAINT [PK_Halls_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Halls_CinemaId_Cinemas_Id] FOREIGN KEY ([CinemaId]) REFERENCES [dbo].[Cinemas] ([Id])
);

GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Halls_Name_CinemaId]
    ON [dbo].[Halls]([Name] ASC, [CinemaId] ASC);