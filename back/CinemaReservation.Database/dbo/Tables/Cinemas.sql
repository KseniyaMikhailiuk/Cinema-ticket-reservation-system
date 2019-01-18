CREATE TABLE [dbo].[Cinemas] (
    [Id]     INT           IDENTITY (1, 1) NOT NULL,
    [Name]   NVARCHAR (50) NOT NULL,
    [CityId] INT           NOT NULL,
    CONSTRAINT [PK_Cinemas_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Cinemas_CityId_Cities_Id] FOREIGN KEY ([CityId]) REFERENCES [dbo].[Cities] ([Id])
);

GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Cinemas_Name_CityId]
    ON [dbo].[Cinemas]([Name] ASC, [CityId] ASC);