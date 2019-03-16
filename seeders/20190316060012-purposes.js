module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Purposes', [{
    number: 1,
    description: 'Purpose 1',
  },
  {
    number: 2,
    description: 'Purpose 2',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Purposes', null, {}),
};
