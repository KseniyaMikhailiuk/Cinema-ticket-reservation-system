CREATE TABLE [dbo].[seanceAdditionalServices] (
    [id]        INT IDENTITY (1, 1) NOT NULL,
    [seanceId]  INT NOT NULL,
    [serviceId] INT NOT NULL,
    CONSTRAINT [PK_seanceAdditionalServices] PRIMARY KEY CLUSTERED ([id] ASC),
    CONSTRAINT [FK_seanceAdditionalServices_seances] FOREIGN KEY ([seanceId]) REFERENCES [dbo].[seances] ([id]),
    CONSTRAINT [FK_seanceAdditionalServices_services] FOREIGN KEY ([serviceId]) REFERENCES [dbo].[services] ([id])
);

