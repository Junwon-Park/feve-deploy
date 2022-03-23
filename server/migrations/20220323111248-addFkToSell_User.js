'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Sell', 'product_key', {
      type: Sequelize.BIGINT,
      allowNull: false
    });

    await queryInterface.addConstraint('Sell', {
      fields: ['product_key'],
      type: 'foreign key',
      name: 'product_sell_id_fk',

      references: {
        table: 'PRODUCT',
        field: 'product_key'
      },

      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addColumn('Sell', 'sell_seller_key', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('Sell', {
      fields: ['sell_seller_key'],
      type: 'foreign key',
      name: 'user_sell_id_fk',
      references: {
        table: 'User',
        field: 'user_key'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addColumn('Sell', 'sell_buyer_key', {
      type: Sequelize.BIGINT
    });
    await queryInterface.addConstraint('Sell', {
      fields: ['sell_buyer_key'],
      type: 'foreign key',
      name: 'user_seller_id_fk',
      references: {
        table: 'User',
        field: 'user_key'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Sell', 'sell_seller_key');
    await queryInterface.removeColumn('Sell', 'sell_buyer_key');
  }
};
