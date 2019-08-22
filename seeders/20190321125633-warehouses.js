module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Warehouses', [{
    name: 'Руслан Барака',
    provinceId: 12,
    ownerId: 3,
    company: 'Руслан Барака',
    type: 1,
  },
  {
    name: 'Техназ',
    provinceId: 12,
    ownerId: 4,
    company: 'Техназ',
    type: 2,
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Warehouses', null, {}),
};
