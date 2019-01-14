CREATE TABLE [dbo].[Services] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Services_Id] PRIMARY KEY CLUSTERED ([Id] ASC)
);

