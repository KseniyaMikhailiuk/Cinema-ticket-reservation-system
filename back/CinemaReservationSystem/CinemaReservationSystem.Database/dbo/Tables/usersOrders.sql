CREATE TABLE [dbo].[usersOrders] (
    [id]       INT IDENTITY (1, 1) NOT NULL,
    [userId]   INT NOT NULL,
    [seanceId] INT NOT NULL,
    CONSTRAINT [PK_usersOrders] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_usersOrders_seances] FOREIGN KEY ([seanceId]) REFERENCES [dbo].[seances] ([id]),
    CONSTRAINT [FK_usersOrders_users] FOREIGN KEY ([userId]) REFERENCES [dbo].[users] ([id])
);

