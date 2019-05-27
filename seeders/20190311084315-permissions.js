const permissions = require('../util/permissions');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Permissions', [
    {
      id: permissions.CAN_BOOK.id,
      name: permissions.CAN_BOOK.name,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Permissions', null, {}),
};
