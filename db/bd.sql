SELECT TOP (1000) [idPersona]
      ,[perIdentificacion]
      ,[perNombres]
      ,[perApellidos]
      ,[perGenero]
      ,[perCorreo]
      ,[perFechaNacimiento]
  FROM [Agenda].[dbo].[Personas]
  FOR JSON AUTO 