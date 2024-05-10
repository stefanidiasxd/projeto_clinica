const Sequelize = require("sequelize");

const connection = new Sequelize({
  dialect: "sqlite",
  storage: "./ueuueue/database/clinvet.sqlite",
});

module.exports = connection;
