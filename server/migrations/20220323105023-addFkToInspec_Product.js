'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'INSPECTION',
      'PRODUCT_KEY',
      Sequelize.BIGINT
    );
    // foreign key 연결
    await queryInterface.addConstraint('INSPECTION', {
      fields: ['PRODUCT_KEY'],
      type: 'foreign key',
      name: 'FK_Ref_Inspec_To_Product_Key', // DB의 SequelizeMeta에 저장되는 FK의 이름 -> 직접 지정 가능
      references: {
        table: 'PRODUCT',
        field: 'PRODUCT_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
