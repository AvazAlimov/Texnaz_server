module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Tags', [{
    name: 'Tag #1',
  },
  {
    name: 'Tag #2',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Tags', null, {}),
};
