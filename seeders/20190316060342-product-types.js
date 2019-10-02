module.exports = {
  up: queryInterface => queryInterface.bulkInsert('ProductTypes', [{
    name: 'Растворитель',
  },
  {
    name: 'Защитные материалы',
  },
  {
    name: 'Очиститель',
  },
  {
    name: 'Пропитка',
  },
  {
    name: 'Герметик',
  },
  {
    name: 'Краски',
  },
  {
    name: 'Грунтовка',
  },
  {
    name: 'Шпатлевка',
  },
  {
    name: 'Эмаль НЦ',
  },
  {
    name: 'Эмаль',
  },
  {
    name: 'Лак',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('ProductTypes', null, {}),
};
