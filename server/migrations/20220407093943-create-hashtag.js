'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hashtag', {
      HASHTAG_KEY: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      HASHTAG_TITLE: {
        type:Sequelize.STRING(15),
        allowNull: true,
        unique: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hashtag');
  }
};
