const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Roupa = sequelize.define(
  "Roupa",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tamanho: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Roupa;
