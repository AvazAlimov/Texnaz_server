module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserRole', {
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
  down: queryInterface => queryInterface.dropTable('UserRole'),
};
