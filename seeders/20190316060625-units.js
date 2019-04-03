module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Units', [{
    name: 'Шт',
  },
  {
    name: 'Кг',
  },
  {
    name: 'Л',
  },
  {
    name: 'М в 2',
  },
  {
    name: 'М',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Units', null, {}),
};
