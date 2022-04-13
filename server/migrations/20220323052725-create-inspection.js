'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inspection', {
      INSPECTION_KEY: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      INSPECTION_DATE: {
        type: Sequelize.DATE
      },
      INSPECTION_STATUS: {
        allowNull: false,
        type: Sequelize.STRING(1),
        defaultValue: '0'
      },
      INSPECTION_RESULT: {
        type: Sequelize.STRING(1)
      },
      INSPECTION_ADATE: {
        type: Sequelize.DATE
      },
      INSPECTION_RDATE: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inspection');
  }
};
