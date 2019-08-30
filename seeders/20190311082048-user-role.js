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
      {
        userId: 5,
        roleId: 3,
      },
      {
        userId: 6,
        roleId: 6,
      },
      // Additional users
      {
        userId: 18,
        roleId: 8,
      },
      {
        userId: 19,
        roleId: 7,
      },
      {
        userId: 20,
        roleId: 7,
      },
      {
        userId: 21,
        roleId: 2,
      },
      {
        userId: 22,
        roleId: 2,
      },
      {
        userId: 23,
        roleId: 2,
      },
      {
        userId: 24,
        roleId: 2,
      },
    ].concat(bindManagers([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])),
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('UserRoles', null, {}),
};
