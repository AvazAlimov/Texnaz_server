const brands = [
  {
    id: '1',
    name: 'Polchem',
    manufacturer: 'Polchem',
    country: 'Турция',
  },
  {
    id: '2',
    name: 'Eurotex',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '3',
    name: 'Ralex',
    manufacturer: 'Ralex',
    country: 'Россия',
  },
  {
    id: '4',
    name: 'Прочее',
    manufacturer: 'Прочее',
    country: 'Россия',
  },
  {
    id: '5',
    name: 'Растворитель',
    manufacturer: 'Растворитель',
    country: 'Россия',
  },
  {
    id: '6',
    name: 'Dali',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '7',
    name: 'НЦ-132П',
    manufacturer: 'НЦ-132П',
    country: 'Россия',
  },
  {
    id: '8',
    name: 'dali-decor',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '9',
    name: 'KSD',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '10',
    name: 'ЛД',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '11',
    name: 'Pirex',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '12',
    name: 'Fenilax',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '13',
    name: 'Akvateks',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '14',
    name: 'Eurotex-Premium',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '15',
    name: 'Eurotex-Eco',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '16',
    name: 'Eurotex-Sauna',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '17',
    name: 'Akvateks-extra',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '18',
    name: 'Рогнеда',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '19',
    name: 'Kord',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '20',
    name: 'Akvaplast',
    manufacturer: 'Rogneda',
    country: 'Россия',
  },
  {
    id: '21',
    name: 'Certa',
    manufacturer: 'Certa',
    country: 'Россия',
  },
  {
    id: '22',
    name: 'НЦ-132',
    manufacturer: 'НЦ-132',
    country: 'Россия',
  },
  {
    id: '23',
    name: 'НЦ-218',
    manufacturer: 'НЦ-218',
    country: 'Россия',
  },
  {
    id: '24',
    name: 'НЦ-243',
    manufacturer: 'НЦ-243',
    country: 'Россия',
  },
  {
    id: '25',
    name: 'НЦ',
    manufacturer: 'НЦ',
    country: 'Россия',
  },
  {
    id: '26',
    name: 'Иран',
    manufacturer: 'Иран',
    country: 'Иран',
  },
];

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Brands', brands, {}),

  down: queryInterface => queryInterface.bulkDelete('Brands', null, {}),

  getBrands: () => brands,
};
