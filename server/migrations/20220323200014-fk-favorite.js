'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Favorite', 'PRODUCT_KEY', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('Favorite', {
      fields: ['PRODUCT_KEY'],
      type: 'foreign key',
      name: 'PRODUCT_FAVORITE_KEY_FK',
      references: {
        table: 'Product',
        field: 'PRODUCT_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addColumn('Favorite', 'USER_KEY', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('Favorite', {
      fields: ['USER_KEY'],
      type: 'foreign key',
      name: 'USER_FAVORITE_KEY_FK',
      references: {
        table: 'User',
        field: 'USER_KEY'
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Favorite', 'PRODUCT_KEY');
    await queryInterface.removeColumn('Category', 'CATEGORY_KEY');
  }
};
