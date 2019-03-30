module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Brands', [{
    id: 1,
    name: 'John Doe',
    country: 'USA',
  },
  {
    id: 2,
    name: 'Avaz Alimov',
    country: 'Uzbekisan',
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Brands', null, {}),
};
