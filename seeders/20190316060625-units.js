module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Units', [{
    name: 'Kilogramms',
  },
  {
    name: 'Meters',
  },
  {
    name: 'Liters',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Units', null, {}),
};
