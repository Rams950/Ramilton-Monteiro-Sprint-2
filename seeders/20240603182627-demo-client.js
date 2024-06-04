"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Clientes",
      [
        {
          nome: "John Doe",
          email: "john.doe@example.com",
          telefone: "9504129",
          endereco: "Mindelo cabo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Clientes", null, {});
  },
};
