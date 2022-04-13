'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Post', 'USER_KEY', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('Post', {
      fields: ['USER_KEY'],
      type: 'foreign key',
      name: 'POST_USER_KEY_FK',
      references: {
        table: 'User',
        field: 'USER_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Post', 'USER_KEY');
  }
};
