const permissions = require('../util/permissions');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('RolePermissions',
    [
      {
        roleId: 2,
        permissionId: permissions.CAN_BOOK.id,
      },
    ], {}),

  down: queryInterface => queryInterface.bulkDelete('RolePermissions', null, {}),
};
