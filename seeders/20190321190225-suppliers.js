module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Suppliers', [{
    name: 'John Doe',
    country: 'USA',
  },
  {
    name: 'Avaz Alimov',
    country: 'Uzbekisan',
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Suppliers', null, {}),
};
