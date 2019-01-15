CREATE TABLE [dbo].[Users] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [Name]         NVARCHAR (50)  NOT NULL,
    [Surname]      NVARCHAR (50)  NOT NULL,
    [Email]        NVARCHAR (255) NOT NULL,
    [PasswordHash] BINARY (32)    NOT NULL,
    [Salt]         BINARY (32)    NOT NULL,
    CONSTRAINT [PK_Users_Id] PRIMARY KEY CLUSTERED ([Id] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Users_Email]
    ON [dbo].[Users]([Email] ASC);

