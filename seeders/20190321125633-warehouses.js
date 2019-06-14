module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Warehouses', [{
    name: 'Руслан Барака',
    totalPrice: 0.0,
    ownerId: 3,
    company: 'Руслан Барака',
    type: 1,
  },
  {
    name: 'Техназ',
    totalPrice: 0.0,
    ownerId: 4,
    company: 'Техназ',
    type: 2,
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Warehouses', null, {}),
};
