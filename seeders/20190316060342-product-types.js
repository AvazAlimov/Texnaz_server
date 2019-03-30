module.exports = {
  up: queryInterface => queryInterface.bulkInsert('ProductTypes', [{
    name: 'Type 1',
  },
  {
    name: 'Type 2',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('ProductTypes', null, {}),
};
