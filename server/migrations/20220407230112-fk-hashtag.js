'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Hashtag', 'POST_KEY', {
      type: Sequelize.BIGINT,
      allowNull: false
    });
    await queryInterface.addConstraint('Hashtag', {
      fields: ['POST_KEY'],
      type: 'foreign key',
      name: 'HASHTAG_POST_KEY_FK',
      references: {
        table: 'Post',
        field: 'POST_KEY'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Hashtag', 'POST_KEY');
  }
};
