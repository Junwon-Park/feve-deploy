'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cscenter', {
      CSCENTER_KEY: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      CSCENTER_TITLE: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      CSCENTER_CONTENTS: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      CSCENTER_WDATE: {
        allowNull: false,
        type: Sequelize.DATE
      },
      CSCENTER_STATUS: {
        allowNull: false,
        defaultValue: '0',
        type: Sequelize.STRING(1)
      },
      CSCENTER_COMMENT: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      CSCENTER_COMMENT_WDATE: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cscenter');
  }
};
