const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "sqlite",
  storage: "clinica_vet/clinvet.sqlite",
});

module.exports = connection;
