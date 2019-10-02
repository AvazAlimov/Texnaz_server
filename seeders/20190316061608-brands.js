const brands = [
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
    manufacturer: 'Rogneda',
    country: 'Russia',
  },
  {
    id: 6,
    name: 'Акватекс',
    country: 'Russia',
    manufacturer: 'Rogneda',
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
    manufacturer: 'Rogneda',
  },
  {
    id: 9,
    name: 'Dali',
    country: 'Russia',
    manufacturer: 'Rogneda',
  },
  {
    id: 10,
    name: 'Polchem',
    manufacturer: 'Polchem',
    country: 'Turkey',
  },
  {
    id: 11,
    name: 'DALI - Decor',
    manufacturer: 'Rogneda',
  },
  {
    id: 12,
    name: 'Eurotex Premium',
    country: 'Russia',
    manufacturer: 'Rogneda',
  },
  {
    id: 13,
    name: 'Акватекс Extra',
    manufacturer: 'Rogneda',
    country: 'Russia',
  },
  {
    id: 14,
    name: 'Certa-Patina',
    manufacturer: 'НПП Спектр',
  },
  {
    id: 15,
    name: 'Не определено',
    manufacturer: 'Не определено',
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Brands', brands, {}),

  down: queryInterface => queryInterface.bulkDelete('Brands', null, {}),

  getBrands: () => brands,
};
