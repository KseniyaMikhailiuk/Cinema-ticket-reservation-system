CREATE TABLE [dbo].[Users] (
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [Name]         NVARCHAR (255) NOT NULL,
    [Surname]      NVARCHAR (255) NOT NULL,
    [Email]        NVARCHAR (255) NOT NULL,
    [PasswordHash] BINARY (256)   NOT NULL,
    [Salt]         BINARY (64)   NOT NULL,
    [IsAdmin]      BIT            NOT NULL,
    CONSTRAINT [PK_Users_Id] PRIMARY KEY CLUSTERED ([Id] ASC)
);




GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_Users_Email]
    ON [dbo].[Users]([Email] ASC);

