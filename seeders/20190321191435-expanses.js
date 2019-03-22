module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Expanses', [
    // Perido Expanses Cash
    {
      name: 'Заработная плата БН',
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Налог на землю',
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Налог на имущество',
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Налог на воду',
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Расходы периода',
      is_transport: false,
      is_cash: true,
    },
    // Perido Expanses Non Cash
    {
      name: 'Заработная плата Н',
      is_transport: false,
      is_cash: false,
    },
    {
      name: 'Затраты на банк',
      is_transport: false,
      is_cash: false,
    },

  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Expanses', null, {}),
};
