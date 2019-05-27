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
      {
        userId: 14,
        roleId: 3,
      },
    ].concat(bindManagers([5, 6, 7, 8, 9, 10, 11, 12, 13])),
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('UserRoles', null, {}),
};
