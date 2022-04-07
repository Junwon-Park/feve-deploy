'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('PostComment', 'POST_KEY', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('PostComment', {
      fields: ['POST_KEY'],
      type: 'foreign key',
      name: 'POSTCOMMENT_POST_KEY_FK',
      references: {
        table: 'Post',
        field: 'POST_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addColumn('PostComment', 'USER_KEY', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('PostComment', {
      fields: ['USER_KEY'],
      type: 'foreign key',
      name: 'POSTCOMMENT_USER_KEY_FK',
      references: {
        table: 'User',
        field: 'USER_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('PostComment', 'POST_KEY');
    await queryInterface.removeColumn('PostComment', 'USER_KEY');
  }
};
