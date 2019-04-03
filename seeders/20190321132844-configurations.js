module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Configurations', [
    {
      id: 1,
      name: 'Общий оборот',
      value: 33000000,
    },
    {
      id: 2,
      name: 'Конвертация',
      value: 0.5,
    },
    {
      id: 3,
      name: 'Банковский перевод',
      value: 1.4,
    },
    {
      id: 4,
      name: 'Курс доллара (рыночный)',
      value: 8500,
    },
    {
      id: 5,
      name: 'Курс доллара (официальный)',
      value: 8400,
    },
    {
      id: 6,
      name: 'Курс доллара (обмен)',
      value: 8600,
    },
    {
      id: 7,
      name: 'Транспорт Н',
      value: 100,
    },
    {
      id: 8,
      name: 'Транспорт БН',
      value: 100,
    }], {}),

  down: queryInterface => queryInterface.bulkDelete('Configurations', null, {}),
};
