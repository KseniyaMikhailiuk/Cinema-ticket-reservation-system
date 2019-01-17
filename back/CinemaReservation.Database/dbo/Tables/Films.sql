CREATE TABLE [dbo].[Films] (
    [Id]                INT              IDENTITY (1, 1) NOT NULL,
    [Title]             NVARCHAR (50)    NOT NULL,
    [PosterImageId]     UNIQUEIDENTIFIER NOT NULL,
    [ReleaseDate]       DATE             NOT NULL,
    [Description]       NVARCHAR (MAX)   NOT NULL,
    [StartShowingDate]  DATE             NOT NULL,
    [FinishShowingDate] DATE             NOT NULL,
    CONSTRAINT [PK_Films_Id] PRIMARY KEY CLUSTERED ([Id] ASC)
);

GO