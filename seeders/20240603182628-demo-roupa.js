"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Roupas",
      [
        {
          nome: "Camisa Social",
          tipo: "M",
          tamanho: "M",
          cor: "azul",
          preco: "989",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Roupas", null, {});
  },
};
