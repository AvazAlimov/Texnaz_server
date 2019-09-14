module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Ranges', [
    {
      planId: 1,
      percentage: 5,
      from: 40,
    },
    {
      planId: 1,
      percentage: 6,
      from: 60,
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('Ranges', null, {}),
};
