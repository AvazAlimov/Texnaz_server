module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserRoles', {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    roleId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
  }),
  down: queryInterface => queryInterface.dropTable('UserRoles'),
};
