CREATE TABLE [dbo].[films] (
    [id]                INT            IDENTITY (1, 1) NOT NULL,
    [title]             NVARCHAR (50)  NOT NULL,
    [poster]            NVARCHAR (MAX) NOT NULL,
    [releaseDate]       DATE           NOT NULL,
    [description]       NVARCHAR (MAX) NOT NULL,
    [startShowingDate]  DATE           NOT NULL,
    [finishShowingDate] DATE           NOT NULL,
    CONSTRAINT [PK_films] PRIMARY KEY CLUSTERED ([id] ASC)
);

