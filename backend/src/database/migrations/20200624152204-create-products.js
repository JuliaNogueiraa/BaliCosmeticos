'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.createTable('products', { 
     id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIcrement:true,
        allowNull:false,
     },
     name: {
       type: sequelize.STRING,
       allowNull: false,
     },
     description: {
       type: sequelize.STRING,
       allowNull:false,
     },
     provider:{
      type: sequelize.STRING,
      allowNull:false,
     },
     quantity:{
       type: sequelize.INTEGER,
       allowNull:false,
     },
     image:{
       type: sequelize.BLOB,
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
   return queryInterface.dropTable('products');
  }
};
