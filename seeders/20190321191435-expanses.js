module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Expanses', [
    // Perido Expanses Cash
    {
      name: 'Заработная плата БН',
      value: 123456,
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Налог на землю',
      value: 234567,
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Налог на имущество',
      value: 345678,
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Налог на воду',
      value: 456789,
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Расходы периода',
      value: 123456,
      is_transport: false,
      is_cash: true,
    },
    // Perido Expanses Non Cash
    {
      name: 'Заработная плата Н',
      value: 123456,
      is_transport: false,
      is_cash: false,
    },
    {
      name: 'Затраты на банк',
      value: 1000000,
      is_transport: false,
      is_cash: false,
    },

  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Expanses', null, {}),
};
