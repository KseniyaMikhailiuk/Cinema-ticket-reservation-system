CREATE TABLE [dbo].[Cities] (
    [Id]   INT           IDENTITY (1, 1) NOT NULL,
    [Name] NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_Cities_Id] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Cities_Name]
    ON [dbo].[Cities]([Name] ASC);

