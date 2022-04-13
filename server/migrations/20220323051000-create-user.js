'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      USER_KEY: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      USER_ID: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      USER_PASSWORD: {
        allowNull: false,
        type: Sequelize.STRING
      },
      USER_NAME: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      USER_MAIL: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      USER_PHONE: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
      USER_ADDRESS1: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      USER_ADDRESS2: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      USER_DELETE: {
        allowNull: false,
        type: Sequelize.STRING(1),
        defaultValue: '0'
      },
      USER_ADMIN: {
        allowNull: false,
        type: Sequelize.STRING(1),
        defaultValue: '0'
      },
      POST_CODE: { type: Sequelize.STRING(10), allowNull: false },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};
