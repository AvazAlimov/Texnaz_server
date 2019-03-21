module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Configurations', [{
    name: 'transport_cash',
    value: 10.5,
  },
  {
    name: 'transport_non_cash',
    value: 11,
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Configurations', null, {}),
};
