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
      {
        userId: 35,
        roleId: 7,
      },
      {
        userId: 22,
        roleId: 8,
      },
      {
        userId: 26,
        roleId: 8,
      },
      {
        userId: 24,
        roleId: 8,
      },
      {
        userId: 25,
        roleId: 8,
      },
      {
        userId: 29,
        roleId: 7,
      },
      {
        userId: 33,
        roleId: 7,
      },
      {
        userId: 32,
        roleId: 7,
      },
      {
        userId: 31,
        roleId: 7,
      },
      {
        userId: 30,
        roleId: 7,
      },
      {
        userId: 34,
        roleId: 7,
      },
    ].concat(bindManagers([40, 35, 22, 26, 36, 39, 24, 41, 42, 38, 25, 29, 33, 32, 31, 30, 34, 37])),
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('UserRoles', null, {}),
};
