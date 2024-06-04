// test/models/medida.test.js
const { sequelize } = require("../../utils/database");
const Medida = require("../../models/medida");

describe("Medida Model", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true, logging: false });
  });

  test("Create a medida", async () => {
    const medida = await Medida.create({
      colarinho: 40,
      ombroAombro: 50,
      peito: 100,
      cintura: 90,
      quadris: 110,
      comprimentoManga: 65,
      circunferenciaBraco: 35,
      punho: 20,
      comprimentoTotalCamisa: 75,
    });
    expect(medida.colarinho).toBe(40);
    expect(medida.ombroAombro).toBe(50);
    expect(medida.peito).toBe(100);
    expect(medida.cintura).toBe(90);
    expect(medida.quadris).toBe(110);
    expect(medida.comprimentoManga).toBe(65);
    expect(medida.circunferenciaBraco).toBe(35);
    expect(medida.punho).toBe(20);
    expect(medida.comprimentoTotalCamisa).toBe(75);
  });
});
