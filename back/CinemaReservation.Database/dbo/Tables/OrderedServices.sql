CREATE TABLE [dbo].[OrderedServices] (
    [Id]        INT IDENTITY (1, 1) NOT NULL,
    [UserId]    INT NOT NULL,
    [ServiceId] INT NOT NULL,
    [SeanceId]  INT NOT NULL,
    CONSTRAINT [PK_OrderedServices_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_OrderedServices_SeanceId_Seances_Id] FOREIGN KEY ([SeanceId]) REFERENCES [dbo].[Seances] ([Id]),
    CONSTRAINT [FK_OrderedServices_ServiceId_SeanceAdditionalServices_Id] FOREIGN KEY ([Id]) REFERENCES [dbo].[SeanceAdditionalServices] ([Id]),
    CONSTRAINT [FK_OrderedServices_UserId_Users_Id] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users] ([Id])
);



