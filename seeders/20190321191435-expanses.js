module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Expanses', [{
    name: 'Expanse 1',
    is_transport: false,
    is_cash: true,
  },
  {
    name: 'Expanse 2',
    is_transport: true,
    is_cash: true,
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Expanses', null, {}),
};
