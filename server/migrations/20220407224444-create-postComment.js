'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PostComment', {
      COMMENT_KEY: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      COMMENT_CONTENT:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      COMMENT_WDATE: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PostComment');
  }
};
