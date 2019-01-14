CREATE TABLE [dbo].[orderedServices] (
    [id]        INT IDENTITY (1, 1) NOT NULL,
    [orderId]   INT NOT NULL,
    [serviceId] INT NOT NULL,
    CONSTRAINT [PK_orderedServices] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_orderedServices_services] FOREIGN KEY ([serviceId]) REFERENCES [dbo].[services] ([id]),
    CONSTRAINT [FK_orderedServices_usersOrders] FOREIGN KEY ([orderId]) REFERENCES [dbo].[usersOrders] ([id])
);

