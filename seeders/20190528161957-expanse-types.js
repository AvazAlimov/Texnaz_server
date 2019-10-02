module.exports = {
  up: queryInterface => queryInterface.bulkInsert('ExpanseTypes', [
    {
      name: 'представительские',
    },
    {
      name: 'бизнес',
    },
    {
      name: 'частный',
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('ExpanseTypes', null, {}),
};
