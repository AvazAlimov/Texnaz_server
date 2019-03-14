module.exports = {
  up: queryInterface => queryInterface.bulkInsert('UserRoles', [{
    userId: 1,
    roleId: 1,
  },
  {
    userId: 2,
    roleId: 2,
  },
  {
    userId: 3,
    roleId: 3,
  },
  {
    userId: 4,
    roleId: 4,
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('UserRoles', null, {}),
};
