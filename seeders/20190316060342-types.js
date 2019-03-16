module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Types', [{
    name: 'Type 1',
  },
  {
    name: 'Type 2',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Types', null, {}),
};
