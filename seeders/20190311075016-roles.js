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
    name: 'Бухгалтер',
  },
  {
    id: 6,
    name: 'Коммерческий директор',
  },
  {
    id: 7,
    name: 'Учредитель',
  },
  {
    id: 8,
    name: 'Территориальный менеджер',
  },
  {
    id: 9,
    name: 'Торговый представитель ',
  },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Roles', null, {}),
};
