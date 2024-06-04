// associations.js
const Medida = require("../models/medida");
const Cliente = require("../models/Cliente");
const Roupa = require("../models/Roupa");

Cliente.hasMany(Medida, {
  foreignKey: "clienteId",
  onDelete: "CASCADE",
});

Medida.belongsTo(Cliente, {
  foreignKey: "clienteId",
  onDelete: "CASCADE",
});

Roupa.belongsTo(Cliente, {
  foreignKey: "clienteId",
  onDelete: "CASCADE",
});

Cliente.hasMany(Roupa, {
  foreignKey: "clienteId",
  onDelete: "CASCADE",
});

module.exports = { Medida, Cliente, Roupa };
