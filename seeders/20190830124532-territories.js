

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Territories', [
    {
      id: 1,
      name: 'Ташкент + Ташкент область',
    },
    {
      id: 2,
      name: 'Долина',
    },
    {
      id: 3,
      name: 'Югозапад 1',
    },
    {
      id: 4,
      name: 'Югозапад 2',
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Territories', null, {}),
};
