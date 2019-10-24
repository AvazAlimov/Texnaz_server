const brands = [
  {
    id: '14',
    name: 'Certa-Patina',
    manufacturer: 'Certa-Patina',
    country: 'Россия',
  },
  {
    id: '9',
    name: 'Dali',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '11',
    name: 'DALI - Decor',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '17',
    name: 'Dubai',
    manufacturer: 'Dubai',
    country: 'Россия',
  },
  {
    id: '8',
    name: 'Eurotex',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '24',
    name: 'Eurotex Eco',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '12',
    name: 'Eurotex Premium',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '25',
    name: 'Eurotex Сауна',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '1',
    name: 'Master',
    manufacturer: 'Master',
    country: 'Россия',
  },
  {
    id: '18',
    name: 'Pirex',
    manufacturer: 'Pirex',
    country: 'Россия',
  },
  {
    id: '10',
    name: 'Polchem',
    manufacturer: 'Polchem',
    country: 'Турция',
  },
  {
    id: '16',
    name: 'Ralex',
    manufacturer: 'Ralex',
    country: 'Россия',
  },
  {
    id: '2',
    name: 'Roshal',
    manufacturer: 'Roshal',
    country: 'Россия',
  },
  {
    id: '7',
    name: 'Woodmaster professional',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '26',
    name: 'Аквапласт',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '6',
    name: 'Акватекс',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '13',
    name: 'Акватекс-экстра',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '19',
    name: 'Акватекс Lazur',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '20',
    name: 'Белгород',
    manufacturer: 'Белгород',
    country: 'Россия',
  },
  {
    id: '21',
    name: 'Дзержинск',
    manufacturer: 'Дзержинск',
    country: 'Россия',
  },
  {
    id: '22',
    name: 'Иран',
    manufacturer: 'Иран',
    country: 'Россия',
  },
  {
    id: '3',
    name: 'Казань',
    manufacturer: 'Казань',
    country: 'Россия',
  },
  {
    id: '5',
    name: 'Любимая дача',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '23',
    name: 'Фенилакс',
    manufacturer: 'Фенилакс',
    country: 'Россия',
  },
  {
    id: '4',
    name: 'Экодом',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '27',
    name: 'Россия',
    manufacturer: 'Россия',
    country: 'Россия',
  },
  {
    id: '28',
    name: 'Китай',
    manufacturer: 'Китай',
    country: 'Китай',
  },
  {
    id: '29',
    name: 'Корд',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Brands', brands, {}),

  down: queryInterface => queryInterface.bulkDelete('Brands', null, {}),

  getBrands: () => brands,
};
