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
  ], {}),

  // Завсклад
  // Управляющий
  // Продавец
  // Оператор

  down: queryInterface => queryInterface.bulkDelete('Roles', null, {}),
};
