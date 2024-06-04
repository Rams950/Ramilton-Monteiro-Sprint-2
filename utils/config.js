const dotenv = require("dotenv");

const values = dotenv.config();

if (values.error) {
  throw values.error;
}

const { parsed: envs } = values;

module.exports = envs;
