module.exports = {
  up: queryInterface => queryInterface.bulkInsert('BatchExpanses', [
    // Perido Expanses Non Cash
    {
      batchId: 1,
      name: 'Заработная плата БН',
      value: 222375200,
      is_transport: false,
      is_cash: false,
    },
    {
      batchId: 1,
      name: 'Налог на землю',
      value: 4970000,
      is_transport: false,
      is_cash: false,
    },
    {
      batchId: 1,
      name: 'Налог на имущество',
      value: 23550000,
      is_transport: false,
      is_cash: false,
    },
    {
      batchId: 1,
      name: 'Налог на воду',
      value: 460000,
      is_transport: false,
      is_cash: false,
    },
    {
      batchId: 1,
      name: 'Расходы периода',
      value: 763298540,
      is_transport: false,
      is_cash: false,
    },
    {
      batchId: 1,
      name: 'Конвертация',
      value: 1487842.95,
      is_transport: false,
      is_cash: false,
    },

    // Perido Expanses Cash
    {
      batchId: 1,
      name: 'Заработная плата Н',
      value: 577624800,
      is_transport: false,
      is_cash: true,
    },
    {
      batchId: 1,
      name: 'Затраты на банк',
      value: 3253826,
      is_transport: false,
      is_cash: true,
    },

    // Transport Expanses Cash
    {
      batchId: 1,
      name: '',
      value: 12000000,
      is_transport: true,
      is_cash: false,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('BatchExpanses', null, {}),
};
