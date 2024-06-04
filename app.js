// Importações
const express = require("express");
const bodyParser = require("body-parser");
const medidasRoutes = require("./routes/medidaRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const roupaRoutes = require("./routes/roupaRoutes");

require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use("/api/medidas", medidasRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/roupas", roupaRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.use((req, res, next) => {
  const error = new Error("Rota não encontrada");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
