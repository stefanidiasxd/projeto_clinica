const { DataTypes } = require("sequelize");
const connection = require("../database/databaseConnection");

const pets = connection.define("Pets", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  carry: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  weight: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
module.exports = pets;
