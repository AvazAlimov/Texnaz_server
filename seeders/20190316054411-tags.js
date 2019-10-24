module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Tags', [{
    id: 1,
    name: 'РБ',
  },
  {
    id: 2,
    name: 'ТН',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Tags', null, {}),
};
