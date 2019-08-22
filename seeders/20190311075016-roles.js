module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Roles', [{
    id: 1,
    name: 'Управление',
  },
  {
    id: 2,
    name: 'Менеджер',
  },
  {
    id: 3,
    name: 'Оператор',
  },
  {
    id: 4,
    name: 'Завскладом',
  },
  {
    id: 5,
    name: 'Финансовый менеджер',
  },
  {
    id: 6,
    name: 'Начальник',
  },
  {
    id: 7,
    name: 'Руководитель',
  },
  {
    id: 8,
    name: 'Управление провинции',
  },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Roles', null, {}),
};
