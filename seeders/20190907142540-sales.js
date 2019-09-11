
module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Sales', [
    {
      number: '123',
      isClosed: false,
      type: 1,
      form: 1,
      clientId: 1,
      managerId: 1,
      userId: null,
      warehouseId: 1,
      approved: 1,
      shipped: 0,
      days: 1,
      provinceId: 1,
      officialRate: '1',
      exchangeRate: '1',
      createdAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Sales', null, {}),
};
