// test/models/cliente.test.js
const { sequelize } = require("../../utils/database");
const Cliente = require("../../models/Cliente");

describe("Cliente Model", () => {
  beforeAll(async () => {
    await sequelize.sync({ force: true, logging: false });
  });

  test("Create a cliente", async () => {
    const cliente = await Cliente.create({
      nome: "Fulano",
      email: "fulano@example.com",
      telefone: "123456789",
      endereco: "Rua A, 123",
    });
    expect(cliente.nome).toBe("Fulano");
    expect(cliente.email).toBe("fulano@example.com");
    expect(cliente.telefone).toBe("123456789");
    expect(cliente.endereco).toBe("Rua A, 123");
  });
});
