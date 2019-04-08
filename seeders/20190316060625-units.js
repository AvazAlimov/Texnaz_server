module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Units', [
    {
      id: 1,
      name: 'Шт',
    },
    {
      id: 2,
      name: 'Кг',
    },
    {
      id: 3,
      name: 'Л',
    },
    {
      id: 4,
      name: 'М в 2',
    },
    {
      id: 5,
      name: 'М',
    },
    {
      id: 6,
      name: 'Гр',
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Units', null, {}),
};
