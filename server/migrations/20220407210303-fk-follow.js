'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Follow', 'FOLLOWER_ID', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('Follow', {
      fields: ['FOLLOWER_ID'],
      type: 'foreign key',
      name: 'USER_FOLLOWER_KEY_FK',
      references: {
        table: 'User',
        field: 'USER_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addColumn('Follow', 'FOLLOWING_ID', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('Follow', {
      fields: ['FOLLOWING_ID'],
      type: 'foreign key',
      name: 'USER_FOLLOWING_KEY_FK',
      references: {
        table: 'User',
        field: 'USER_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Follow', 'FOLLOWER_ID');
    await queryInterface.removeColumn('Follow', 'FOLLOWING_ID');
  }
};
