CREATE TABLE [dbo].[users] (
    [id]       INT           IDENTITY (1, 1) NOT NULL,
    [name]     NVARCHAR (50) NOT NULL,
    [surname]  NVARCHAR (50) NOT NULL,
    [email]    NVARCHAR (50) NOT NULL,
    [password] NVARCHAR (50) NOT NULL,
    CONSTRAINT [PK_users] PRIMARY KEY CLUSTERED ([id] ASC)
);

