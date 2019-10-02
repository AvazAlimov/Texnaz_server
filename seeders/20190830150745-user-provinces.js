

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('UserProvinces', [
    {
      id: 1,
      userId: 19,
      provinceId: 1,
    },
    {
      id: 2,
      userId: 19,
      provinceId: 5,
    },
    {
      id: 3,
      userId: 20,
      provinceId: 3,
    },
    {
      id: 4,
      userId: 20,
      provinceId: 15,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('UserProvinces', null, {}),
};
