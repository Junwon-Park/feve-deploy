'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('INSPECTION', 'USER_KEY', Sequelize.BIGINT);
    // foreign key 연결
    await queryInterface.addConstraint('INSPECTION', {
      fields: ['USER_KEY'],
      type: 'foreign key',
      name: 'FK_Ref_Inspec_To_USER_KEY', // DB의 SequelizeMeta에 저장되는 FK의 이름 -> 직접 지정 가능
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
