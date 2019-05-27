const permissions = require('../util/permissions');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Permissions',
    Object.values(permissions).map(permission => ({
      id: permission.id,
      name: permission.name,
    })), {}),
  down: queryInterface => queryInterface.bulkDelete('Permissions', null, {}),
};
