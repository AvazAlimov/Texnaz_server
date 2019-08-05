module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Configurations', [
    {
      id: 1,
      name: 'Общий оборот',
      value: 33000000000,
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
      name: 'Курс доллара (Продажа)',
      value: 8450,
    },
    {
      id: 5,
      name: 'Курс доллара (Покупка)',
      value: 8368,
    },
    {
      id: 6,
      name: 'Курс доллара (Биржа)',
      value: 8368,
    },
    {
      id: 7,
      name: 'Транспорт Н',
      value: 5800,
    },
    {
      id: 8,
      name: 'Транспорт БН',
      value: 0,
    }], {}),

  down: queryInterface => queryInterface.bulkDelete('Configurations', null, {}),
};
