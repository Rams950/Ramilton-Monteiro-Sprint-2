// test/models/roupa.test.js
const { sequelize } = require("../../utils/database");
const Roupa = require("../../models/roupas");

describe("Roupa Model", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true, logging: false });
  });

  test("Create a roupa", async () => {
    const roupa = await Roupa.create({
      tipo: "Camiseta de algodão",
      tamanho: "M",
    });

    expect(roupa.tipo).toBe("Camiseta de algodão");
    expect(roupa.tamanho).toBe("M");
  
  });
});
