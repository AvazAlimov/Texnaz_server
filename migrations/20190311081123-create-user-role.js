module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('UserRoles', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    roleId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id',
      },
    },
  })
    .then(() => queryInterface.sequelize.query(
      'ALTER TABLE `UserRoles` ADD UNIQUE `user_role`(`userId`, `roleId`)',
    )),
  down: queryInterface => queryInterface.dropTable('UserRoles'),
};
