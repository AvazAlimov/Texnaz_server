
module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Sales', [
    {
      id: 1,
      number: '1',
      type: 2,
      form: 3,
      clientId: 1,
      managerId: 2,
      userId: 1,
      warehouseId: 1,
      approved: 1,
      shipped: 1,
      days: 10,
    },
    {
      id: 2,
      number: '2',
      type: 3,
      form: 4,
      clientId: 2,
      managerId: 2,
      userId: 2,
      warehouseId: 1,
      approved: 1,
      shipped: 1,
      days: 10,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Sales', null, {}),
};
