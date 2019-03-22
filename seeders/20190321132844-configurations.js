module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Configurations', [
    {
      name: 'Общий оборот',
      value: 33000000,
    },
    {
      name: 'Конвертация',
      value: 0.5,
    },
    {
      name: 'Банковский перевод',
      value: 1.4,
    },
    {
      name: 'Транспорт Н',
      value: 100,
    },
    {
      name: 'Транспорт БН',
      value: 100,
    }], {}),

  down: queryInterface => queryInterface.bulkDelete('Configurations', null, {}),
};
