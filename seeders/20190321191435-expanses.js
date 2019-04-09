module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Expanses', [
    // Perido Expanses Non Cash
    {
      name: 'Заработная плата БН',
      value: 222375200,
      is_transport: false,
      is_cash: false,
    },
    {
      name: 'Затраты на банк',
      value: 3253826,
      is_transport: false,
      is_cash: false,
    },

    {
      name: 'Налог на землю',
      value: 4970000,
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Налог на имущество',
      value: 23550000,
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Налог на воду',
      value: 460000,
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Расходы периода',
      value: 763298540,
      is_transport: false,
      is_cash: true,
    },
    // Perido Expanses Cash
    {
      name: 'Заработная плата Н',
      value: 123456,
      is_transport: false,
      is_cash: true,
    },
    {
      name: 'Конвертация',
      value: 1487842.95,
      is_transport: false,
      is_cash: true,
    },

    // Transport Expanses Cash
    {
      name: '',
      value: 12000000,
      is_transport: true,
      is_cash: false,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Expanses', null, {}),
};
