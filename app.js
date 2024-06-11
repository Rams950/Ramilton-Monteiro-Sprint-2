// Importações
const express = require("express");
const bodyParser = require("body-parser");
const medidasRoutes = require("./routes/medidaRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const roupaRoutes = require("./routes/roupaRoutes");

const app = express();

app.use(bodyParser.json());
app.use(medidasRoutes);
app.use(clienteRoutes);
app.use(roupaRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configura a porta de escuta
const PORT = process.env.PORT || 3000; // Define a porta de escuta, usando variável de ambiente ou padrão 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
