module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('RolePermissions', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
    permissionId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Permissions',
        key: 'id',
      },
    },
  }).then(() => queryInterface.sequelize.query(
    'ALTER TABLE `RolePermissions` ADD UNIQUE `role_permission`(`roleId`, `permissionId`)',
  )),
  down: queryInterface => queryInterface.dropTable('RolePermissions'),
};
