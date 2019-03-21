module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Warehouses', [{
    name: 'Warehouse 1',
    owner: 'John Nash',
    address: 'Palo Alto',
    company: 'Facebook',
    supply: 1,
  },
  {
    name: 'Warehouse 2',
    owner: 'Michael Corleone',
    address: 'Nevada',
    company: 'Genco',
    supply: 2,
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Warehouses', null, {}),
};
