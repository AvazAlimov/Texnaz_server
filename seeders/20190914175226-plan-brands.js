module.exports = {
  up: queryInterface => queryInterface.bulkInsert('PlanBrands', [
    {
      planId: 1,
      brandId: 10,
    },
    {
      planId: 1,
      brandId: 2,
    },
    {
      planId: 1,
      brandId: 1,
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('PlanBrands', null, {}),
};
