CREATE TABLE [dbo].[orderedSeats] (
    [id]      INT IDENTITY (1, 1) NOT NULL,
    [orderId] INT NOT NULL,
    [seatId]  INT NOT NULL,
    CONSTRAINT [PK_orderedSeats] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_orderedSeats_seats] FOREIGN KEY ([seatId]) REFERENCES [dbo].[seats] ([id]),
    CONSTRAINT [FK_orderedSeats_usersOrders] FOREIGN KEY ([orderId]) REFERENCES [dbo].[usersOrders] ([id])
);

