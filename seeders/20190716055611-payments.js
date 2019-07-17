module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Payments', [
    {
      id: 1,
      number: 10,
      approved: true,
      userId: 1,
      ratio: 8435.92,
      managerId: 2,
      clientId: 1,
      brandId: 1,
      sum: 23478.55,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Payments', null, {}),
};
