'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('clients', {
      id: {
        type: Sequelize.INTEGER,
        primarykey:true,
        allownull:false,
      },
      name: {
        type: sequelize.STRING,
        allowNull:false,
      },
      birthday: {
        type: sequelize.DATE,
        allowNull: false,
      },
      anddress: {
        type: sequelize.STRING,
        allowNull:false,
      },
      number: {
        type: sequelize.INTEGER,
        allowNull:false,
      },
      cep: {
        type: sequelize.INTEGER,
        allowNull:false,
      },
      bairro: {
        type: sequelize.STRING,
        allowNull:false,
      },
      complement: {
        type: sequelize.STRING,
        allowNull:false,
      },
      genero: {
        type: sequelize.STRING,
        allowNull:false,
      },
      created_at: {
        type: sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type: sequelize.DATE,
        allowNull:false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('clients');
  }
};
