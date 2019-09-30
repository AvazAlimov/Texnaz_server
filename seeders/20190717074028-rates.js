

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Rates', [
    {
      id: 1,
      userId: 2,
      marketRate: 8368,
      exchangeRate: 8450,
      officialRate: 8368,
      createdAt: new Date(),
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Rates', null, {}),
};
