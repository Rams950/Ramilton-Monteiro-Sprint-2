const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Medida = sequelize.define(
  "Medida",
  {
    colarinho: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    ombroAombro: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    peito: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cintura: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quadris: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comprimentoManga: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    circunferenciaBraco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    punho: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    comprimentoTotalCamisa: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Medida;
