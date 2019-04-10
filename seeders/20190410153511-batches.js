module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Batches', [{
    name: 'Name',
    number: 1,
    total: 33000000000,
    conversion: 0.5,
    bank_transfer: 1.4,
    market_rate: 8400,
    official_rate: 8368,
    exchange_rate: 8368,
    transport_cash: 5800,
    transport_non_cash: 0,
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Batches', null, {}),
};
