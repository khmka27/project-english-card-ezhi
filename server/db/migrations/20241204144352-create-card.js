'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      engWord: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rusWord: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      themeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Themes',
          key: 'id'
          },
          onDelete: 'CASCADE'
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
          },
          onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  }
};