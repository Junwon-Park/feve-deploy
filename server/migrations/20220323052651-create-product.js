'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PRODUCT', {
      PRODUCT_KEY: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      PRODUCT_BRAND: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      PRODUCT_NAME: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      PRODUCT_MNUM: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      PRODUCT_LDATE: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      PRODUCT_PIC: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      PRODUCT_DESC: {
        allowNull: false,
        type: Sequelize.STRING(500)
      },
      PRODUCT_ORIPRICE: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      PRODUCT_WDATE: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PRODUCT');
  }
};