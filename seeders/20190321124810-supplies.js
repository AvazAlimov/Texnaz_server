module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Supplies', [{
    name: 'Import',
  },
  {
    name: 'Export',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Supplies', null, {}),
};
