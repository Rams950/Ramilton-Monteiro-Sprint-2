const envs = require("../utils/config");


const Sequelize = require("sequelize");

const config = require("../config/config.json")[`${envs.AMBIENTE}`];

const connDB = new Sequelize(
  `${config.database}`,
  `${config.username}`,
  `${config.password}`,
  {
    dialect: "postgres",
    host: envs.HOST,
    logging: true, // Disables logging
    timestamps: false,
  }
);

module.exports = connDB;
