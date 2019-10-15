

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('UserProvinces', [
    {
      id: 1,
      userId: 35,
      provinceId: 12,
    },
    {
      id: 2,
      userId: 35,
      provinceId: 13,
    },
    {
      id: 3,
      userId: 29,
      provinceId: 1,
    },
    {
      id: 4,
      userId: 29,
      provinceId: 5,
    },
    {
      id: 5,
      userId: 33,
      provinceId: 7,
    },
    {
      id: 6,
      userId: 33,
      provinceId: 11,
    },
    {
      id: 7,
      userId: 33,
      provinceId: 16,
    },
    {
      id: 8,
      userId: 32,
      provinceId: 6,
    },
    {
      id: 9,
      userId: 32,
      provinceId: 2,
    },
    {
      id: 10,
      userId: 31,
      provinceId: 4,
    },
    {
      id: 11,
      userId: 31,
      provinceId: 9,
    },
    {
      id: 12,
      userId: 31,
      provinceId: 10,
    },
    {
      id: 13,
      userId: 30,
      provinceId: 3,
    },
    {
      id: 14,
      userId: 30,
      provinceId: 15,
    },
    {
      id: 15,
      userId: 34,
      provinceId: 8,
    },
    {
      id: 16,
      userId: 34,
      provinceId: 14,
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('UserProvinces', null, {}),
};
