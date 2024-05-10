const { DataTypes } = require("sequelize");
const Connection = require("../database/databaseConnection");

const tutores = Connection.define("Tutores", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = tutores;
//USA AQUI CERTO
