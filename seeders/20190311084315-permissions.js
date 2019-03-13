module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Permissions', [{
    id: 1,
    name: 'create user',
  },
  {
    id: 2,
    name: 'read user',
  },
  {
    id: 3,
    name: 'update user',
  },
  {
    id: 4,
    name: 'delete user',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Permissions', null, {}),
};
