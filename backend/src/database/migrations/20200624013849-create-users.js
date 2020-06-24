'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
      id: {
        type: sequelize.INTEGER,
        primaryKey:true,
        autoIcrement:true,
        allowNull:false,
      },
      name:{
        type: sequelize.STRING,
        allowNull:false,
      },
      password:{
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
    return queryInterface.dropTable('users');
  }
};
