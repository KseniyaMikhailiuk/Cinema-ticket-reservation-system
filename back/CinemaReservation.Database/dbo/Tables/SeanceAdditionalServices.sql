CREATE TABLE [dbo].[SeanceAdditionalServices] (
    [Id]        INT   IDENTITY (1, 1) NOT NULL,
    [SeanceId]  INT   NOT NULL,
    [ServiceId] INT   NOT NULL,
    [Price]     MONEY NOT NULL,
    CONSTRAINT [PK_SeanceAdditionalServices_Id] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_SeanceAdditionalServices_SeanceId_Seances_Id] FOREIGN KEY ([SeanceId]) REFERENCES [dbo].[Seances] ([Id]),
    CONSTRAINT [FK_SeanceAdditionalServices_ServiceId_Services_Id] FOREIGN KEY ([ServiceId]) REFERENCES [dbo].[Services] ([Id])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_SeanceAdditionalServices_SeanceId_ServiceId]
    ON [dbo].[SeanceAdditionalServices]([SeanceId] ASC, [ServiceId] ASC);

