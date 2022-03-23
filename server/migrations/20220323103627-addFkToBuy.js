'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Buy", "product_key", {
      type: Sequelize.BIGINT,
      allowNull: false
    });

    await queryInterface.addConstraint("Buy", {

      fields: ["product_key"],
      type: "foreign key",
      name: "product_buy_id_fk",

      references: {
        table: "Product",
        field: "PRODUCT_KEY",

      },

      onDelete: "cascade",
      onUpdate: "cascade",

    });


    
    await queryInterface.addColumn("Buy", "buy_buyer_key", {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    // foreign key 연결
    await queryInterface.addConstraint('Buy', {
      fields: ['buy_buyer_key'],
      type: 'foreign key',
      name: 'FK_Ref_Buy_To_USER_KEY', // DB의 SequelizeMeta에 저장되는 FK의 이름 -> 직접 지정 가능
      references: {
        table: 'User',
        field: 'USER_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addColumn('Buy', 'buy_seller_key', Sequelize.BIGINT);
    // foreign key 연결
    await queryInterface.addConstraint('Buy', {
      fields: ['buy_seller_key'],
      type: 'foreign key',
      name: 'FK_Ref_Buy_Seller_To_USER_KEY', // DB의 SequelizeMeta에 저장되는 FK의 이름 -> 직접 지정 가능
      references: {
        table: 'User',
        field: 'USER_KEY'
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
