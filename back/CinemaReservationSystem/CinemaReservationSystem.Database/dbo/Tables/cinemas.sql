CREATE TABLE [dbo].[cinemas] (
    [id]     INT           IDENTITY (1, 1) NOT NULL,
    [name]   NVARCHAR (50) NOT NULL,
    [cityId] INT           NOT NULL,
    CONSTRAINT [PK_cinemas] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_cinemas_cities] FOREIGN KEY ([cityId]) REFERENCES [dbo].[cities] ([id])
);

