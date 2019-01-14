CREATE TABLE [dbo].[services] (
    [id]    INT           IDENTITY (1, 1) NOT NULL,
    [name]  NVARCHAR (50) NOT NULL,
    [price] MONEY         NOT NULL,
    CONSTRAINT [PK_services] PRIMARY KEY CLUSTERED ([id] ASC)
);

