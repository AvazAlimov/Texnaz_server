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
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Units', null, {}),
};
