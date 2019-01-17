CREATE PROCEDURE [dbo].[UpsertUser]
	@Id int,
	@Name nvarchar(255),
	@Surname nvarchar(255),
	@Email nvarchar(255),
	@PasswordHash binary(256),
	@Salt binary(128),
	@IsAdmin bit
AS
BEGIN
    MERGE [dbo].[Users] AS Target
    USING (SELECT @Id, @Name, @Surname, @Email, @PasswordHash, @Salt, @IsAdmin)
        AS Source (Id, Name, Surname, Email, PasswordHash, Salt, IsAdmin)
    ON (Source.Id = Target.Id)
    WHEN MATCHED THEN
        UPDATE SET
            Target.Name = Source.Name,
			Target.Surname = Source.Surname,
			Target.Email = Source.Email,
			Target.PasswordHash = Source.PasswordHash,
			Target.Salt = Source.Salt,
			Target.IsAdmin = Source.IsAdmin
    WHEN NOT MATCHED BY TARGET THEN
        INSERT (Name, Surname, Email, PasswordHash, Salt, IsAdmin)
        VALUES (Source.Name, Source.Surname, Source.Email, Source.PasswordHash, Source.Salt, Source.IsAdmin);
    SELECT ISNULL (SCOPE_IDENTITY(), @Id)
END;