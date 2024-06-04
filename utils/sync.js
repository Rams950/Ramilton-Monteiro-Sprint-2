// Importe as dependências necessárias
const Sequelize = require("sequelize");
const connectionDB = require("../utils/database");
const Cliente = require("../models/Cliente");
const Roupa = require("../models/roupas");
const Medida = require("../models/medida");

async function syncDatabase() {
  try {
    await connectionDB.authenticate();
    console.log("Conexão estabelecida com sucesso.");

    await connectionDB.sync({ force: true });

    const tables = await connectionDB.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public'"
    );
    console.log("Tabelas no banco de dados:", tables);
  } catch (error) {
    console.error("Falha ao conectar:", error);
  } finally {
    await connectionDB.close();
  }
}

syncDatabase();
