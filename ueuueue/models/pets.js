const { DataTypes } = require("sequelize");
const bancoDeDados = require("../models");

const pets = bancoDeDados.define("Pets", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  peso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tutor_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = pets;
