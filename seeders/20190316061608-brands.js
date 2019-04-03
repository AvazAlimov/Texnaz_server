module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Brands', [{
    name: 'Master',
    country: 'Russia',
  },
  {
    name: 'Roshal',
    country: 'Russia',
  },
  {
    name: 'Казань',
    country: 'Russia',
  },
  {
    name: 'Экодом',
    country: 'Russia',
  },
  {
    name: 'Любимая дача',
    country: 'Russia',
  },
  {
    name: 'Акватекс',
    country: 'Russia',
  },
  {
    name: 'Woodmaster professional',
    country: 'Russia',
  },
  {
    name: 'Eurotex',
    country: 'Russia',
  },
  {
    name: 'Dali',
    country: 'Russia',
  },
  {
    name: 'Polchem',
    country: 'Turkey',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Brands', null, {}),
};
