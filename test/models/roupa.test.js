// test/models/roupa.test.js
const { sequelize } = require("../../utils/database");
const Roupa = require("../../models/roupas");

describe("Roupa Model", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true, logging: false });
  });

  test("Create a roupa", async () => {
    const roupa = await Roupa.create({
      nome: "Camiseta",
      tipo: "Camiseta de algodão",
      tamanho: "M",
      cor: "Branco",
      preco: 29.99,
    });
    expect(roupa.nome).toBe("Camiseta");
    expect(roupa.tipo).toBe("Camiseta de algodão");
    expect(roupa.tamanho).toBe("M");
    expect(roupa.cor).toBe("Branco");
    expect(roupa.preco).toBe(29.99);
  });
});
