module.exports = {
  up: queryInterface => queryInterface.bulkInsert('People', [
    {
      name: 'Руслан',
    },
    {
      name: 'жена',
    },
    {
      name: 'дети',
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('People', null, {}),
};
