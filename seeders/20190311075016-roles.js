module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Roles', [{
    id: 1,
    name: 'ceo',
  },
  {
    id: 2,
    name: 'manager',
  },
  {
    id: 3,
    name: 'accountant',
  },
  {
    id: 4,
    name: 'seller',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Roles', null, {}),
};
