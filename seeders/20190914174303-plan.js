module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Plans', [
    {
      id: 1,
      userId: 21,
      type: 0,
      method: 0,
      roleId: 2,
      start: new Date('2019-09-14'),
      end: new Date('2019-09-28'),
      total: 1000,
      allBrands: false,
      min: 0,
      createdAt: new Date(),
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Plans', null, {}),
};
