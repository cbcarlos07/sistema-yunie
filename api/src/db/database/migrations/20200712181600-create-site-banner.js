'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('site_banner', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        subtitulo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        descricao: {
          type: Sequelize.STRING,
          allowNull: false
        },
        slogan: {
          type: Sequelize.STRING,
          allowNull: false
        },
        imagem1: {
          type: Sequelize.STRING,
          allowNull: false
        },
        imagem2: {
          type: Sequelize.STRING,
          allowNull: false
        },
        imagem3: {
          type: Sequelize.STRING,
          allowNull: false
        }
      }
    );
     
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('site_banner');
     
  }
};
