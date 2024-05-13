const { DataTypes } = require("sequelize");
const connection = require("../database/databaseConnection");
const pets = require("../models/pets");
const tutors = connection.define("Tutores", {
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

tutors.hasMany(pets, { foreignKey: "tutor_id", as: "pets" });
module.exports = tutors;
