'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Inspection', 'PRODUCT_KEY', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    // foreign key 연결
    await queryInterface.addConstraint('Inspection', {
      fields: ['PRODUCT_KEY'],
      type: 'foreign key',
      name: 'FK_Ref_Inspec_To_Product_Key', // DB의 SequelizeMeta에 저장되는 FK의 이름 -> 직접 지정 가능
      references: {
        table: 'Product',
        field: 'PRODUCT_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addColumn('Product', 'PRODUCT_CATE', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('Product', {
      fields: ['PRODUCT_CATE'],
      type: 'foreign key',
      name: 'CATEGORY_PRODUCT_KEY_FK',
      references: {
        table: 'Category',
        field: 'CATEGORY_KEY'
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
