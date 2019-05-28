module.exports = {
  up: queryInterface => queryInterface.bulkInsert('ExpanseForms', [
    {
      name: 'наличные',
    },
    {
      name: 'карта',
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('ExpanseForms', null, {}),
};
