

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Rates', [
    {
      id: 1,
      userId: 2,
      marketRate: 7328,
      exchangeRate: 7231,
      officialRate: 71452,
      createdAt: new Date('2019-05-20'),
      updatedAt: new Date('2019-05-20'),
    },
    {
      id: 2,
      userId: 2,
      marketRate: 7528,
      exchangeRate: 7431,
      officialRate: 71352,
      createdAt: new Date('2019-06-21'),
      updatedAt: new Date('2019-06-21'),
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Rates', null, {}),
};
