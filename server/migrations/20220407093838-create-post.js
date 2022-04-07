'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Post', {
      POST_KEY: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      POST_CONTENT: {
        type:Sequelize.TEXT,
        allowNull: true,
      },
      POST_WDATE: {
        type: Sequelize.DATE,
        allowNull: false
      },
      POST_PIC: {
        type:Sequelize.STRING(100),
        defaultValue:"default_pic.jpg",
        allowNull: false
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Post');
  }
};
