const DataTypes = require("sequelize");
const sequelize = require("../utils/database");

const Roupa = sequelize.define(
  "Roupa",
  {
    tipo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tamanho: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Roupa;
