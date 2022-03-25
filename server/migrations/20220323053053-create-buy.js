'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Buy', {
      buy_key: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      buy_price: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      buy_sdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      buy_edate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      buy_status: {
        allowNull: false,
        defaultValue: '0',
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('buy');
  }
};
