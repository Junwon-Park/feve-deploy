'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sell', {
      sell_key: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      sell_price: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      sell_sdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sell_edate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      sell_status: {
        allowNull: false,
        defaultValue: '0',
        type: Sequelize.STRING
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sell');
  }
};
