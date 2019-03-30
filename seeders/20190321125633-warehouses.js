module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Warehouses', [{
    name: 'Warehouse 1',
    ownerId: 3,
    company: 'Facebook',
    type: 1,
  },
  {
    name: 'Warehouse 2',
    ownerId: 4,
    company: 'Genco',
    type: 2,
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Warehouses', null, {}),
};
