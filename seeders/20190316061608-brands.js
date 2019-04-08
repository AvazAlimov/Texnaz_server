module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Brands', [
    {
      id: 1,
      name: 'Master',
      country: 'Russia',
    },
    {
      id: 2,
      name: 'Roshal',
      country: 'Russia',
    },
    {
      id: 3,
      name: 'Казань',
      country: 'Russia',
    },
    {
      id: 4,
      name: 'Экодом',
      country: 'Russia',
    },
    {
      id: 5,
      name: 'Любимая дача',
      country: 'Russia',
    },
    {
      id: 6,
      name: 'Акватекс',
      country: 'Russia',
    },
    {
      id: 7,
      name: 'Woodmaster professional',
      country: 'Russia',
    },
    {
      id: 8,
      name: 'Eurotex',
      country: 'Russia',
    },
    {
      id: 9,
      name: 'Dali',
      country: 'Russia',
    },
    {
      id: 10,
      name: 'Polchem',
      country: 'Turkey',
    },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Brands', null, {}),
};
