module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Batches', [{
    number: 1,
    weight: 100,
    date: new Date(),
    transport_cash: 10,
    transport_non_cash: 20,
    warehouse: 1,
    supply: 1,
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Batches', null, {}),
};
