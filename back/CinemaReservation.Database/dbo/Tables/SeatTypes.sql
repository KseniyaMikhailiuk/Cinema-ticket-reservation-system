CREATE TABLE [dbo].[SeatTypes] (
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [Type]       NVARCHAR (50) NOT NULL,
    [WidthScale] INT           NOT NULL,
    CONSTRAINT [PK_SeatTypes_Id] PRIMARY KEY CLUSTERED ([Id] ASC)
);



GO
CREATE UNIQUE NONCLUSTERED INDEX [IX_SeatTypes_Type]
    ON [dbo].[SeatTypes]([Type] ASC);