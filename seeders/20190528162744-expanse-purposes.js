module.exports = {
  up: queryInterface => queryInterface.bulkInsert('ExpansePurposes', [
    {
      name: 'фирма 1',
    },
    {
      name: 'фирма 2',
    },
    {
      name: 'семья',
    },
  ], {}),
  down: queryInterface => queryInterface.bulkDelete('ExpansePurposes', null, {}),
};
