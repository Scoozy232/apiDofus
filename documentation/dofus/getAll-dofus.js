module.exports = {
    get: {
      tags: ["Dofus CRUD operations"],
      description: "Recuperation de tous les dofus",
      operationId: "getAllDofus",
      parameters: [],
      
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