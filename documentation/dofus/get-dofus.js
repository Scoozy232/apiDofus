module.exports = {
    get: {
      tags: ["Dofus CRUD operations"],
      description: "Recuperation d'un dofus",
      operationId: "getDofus",
      parameters: [
        {
            name: "id",
            in: "path", 
            schema: {
              $ref: "#/components/schemas/idDofus",
            },
            required: true,
            description: "L'id d'un Dofus",
          },
      ],
      responses: {
        200: {
          description: "Obtention des dofus",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Dofus",
              },
            },
          },
        },
      },
    },
  };