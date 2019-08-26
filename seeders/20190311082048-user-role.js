function bindManagers(managers) {
  return managers.map(userId => ({ userId, roleId: 2 }));
}

function bindSuppervisors(suppervisors) {
  return suppervisors.map(userId => ({ userId, roleId: 7 }));
}

function bindCeos(ceos) {
  return ceos.map(userId => ({ userId, roleId: 8 }));
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
    ].concat(bindManagers([7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      21, 22, 23, 24, 25, 26, 30, 31, 32, 33, 34, 35, 39, 40, 41, 42, 43, 44]))
      .concat(bindCeos([18, 27, 36]))
      .concat(bindSuppervisors([19, 20, 28, 29, 37, 38])),
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('UserRoles', null, {}),
};
