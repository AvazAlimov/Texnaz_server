function bindManagers(managers) {
  return managers.map(userId => ({ userId, roleId: 2 }));
}

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'UserRoles',
    [
      {
        userId: 1,
        roleId: 1,
      },
      {
        userId: 1,
        roleId: 2,
      },
      {
        userId: 2,
        roleId: 2,
      },
      {
        userId: 3,
        roleId: 5,
      },
      {
        userId: 4,
        roleId: 4,
      },
    ].concat(bindManagers([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])),
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('UserRoles', null, {}),
};
