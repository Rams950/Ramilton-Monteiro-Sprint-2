"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Medidas",
      [
        {
          colarinho: 40,
          ombroAombro: 50,
          peito: 100,
          cintura: 80,
          quadris: 90,
          comprimentoManga: 60,
          circunferenciaBraco: 35,
          punho: 20,
          comprimentoTotalCamisa: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Adicione mais medidas aqui
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Medidas", null, {});
  },
};
