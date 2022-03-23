'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Category', {
      CATEGORY_KEY: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      CATEGORY_PARENT: {
        type: Sequelize.STRING(3)
      },
      CATEGORY_NAME: {
        allowNull: false,
        type: Sequelize.STRING(3)
      },
      CATEGORY_DESC: {
        allowNull: false,
        type: Sequelize.STRING(20)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Category');
  }
};