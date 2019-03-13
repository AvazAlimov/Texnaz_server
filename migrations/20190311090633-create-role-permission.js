module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('RolePermission', {
    roleId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    permissionId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  }),
  down: queryInterface => queryInterface.dropTable('RolePermission'),
};
