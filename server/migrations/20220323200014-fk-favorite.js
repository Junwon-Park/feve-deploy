'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('FAVORITE', 'PRODUCT_KEY', {
      type: Sequelize.BIGINT
    });
    await queryInterface.addConstraint('FAVORITE', {
      fields: ['PRODUCT_KEY'],
      type: 'foreign key',
      name: 'PRODUCT_FAVORITE_KEY_FK',
      references: {
        table: 'PRODUCT',
        field: 'PRODUCT_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addColumn('PRODUCT', 'PRODUCT_CATE', {
      type: Sequelize.BIGINT
    });

    await queryInterface.addConstraint('PRODUCT', {
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('FAVORITE', 'PRODUCT_KEY');
    await queryInterface.removeColumn('CATEGORY', 'CATEGORY_KEY');
  }
};
