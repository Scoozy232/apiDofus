module.exports = {
    components: {
      schemas: {
        
        Dofus: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Dofus identification number",
              example: "1",
            },
            nom: {
              type: "string",
              description: "Nom du dofus",
              example: "Abyssal",
            },
            niveau: {
              type: "int",
              description: "Le niveau necessaire pour avoir le dofus",
              example: 100, 
            },
            propriete: {
                type: "string",
                description: "propriete du dofus",
                example: "..., donne 1 PM. ...", 
            },
            donjon: {
                type: "array",
                description: "Donjon a faire pour avoir le dofus",
                example: [{idDonjon : "1"}, {idDonjon : "2"}], 
            },
            difficulte: {
                type: "int",
                description: "difficulte pour avoir le dofus",
                example: 9, 
            },
            stat_native: {
                type: "string",
                description: "Stat du dofus",
                example: "200 vitalité", 
            },
            succes: {
                type: "array",
                description: "Les succes du dofus",
                example: [{nom : "Abyssal"}, {nom : "Plouf !"}], 
            },
            createDate: {
                type: "date",
                description: "Date de création du dofus",
                example: "2022-11-16", 
            },
            updateDate: {
                type: "date",
                description: "Date de modification du dofus",
                example: null, 
            },
            isActive: {
                type: "boolean",
                description: "Dofus est actif ou pas",
                example: true, 
            },
          },
        },
        idDofus:{
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "Dofus identification number",
                    example: "1",
                },
            }
        },
        
      },
    },
  };