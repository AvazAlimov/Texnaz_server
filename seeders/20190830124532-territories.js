

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Territories', [
    {
      id: 1,
      name: 'Territory 1',
    },
    {
      id: 2,
      name: 'Territory 2',
    },
    {
      id: 3,
      name: 'Territory 3',
    },
    {
      id: 4,
      name: 'Territory 4',
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Territories', null, {}),
};
