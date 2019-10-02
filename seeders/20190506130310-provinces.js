
const regions = [
  {
    id: 1,
    territoryId: 2,
    name: 'Андижанская область',
  },
  {
    id: 2,
    territoryId: 3,
    name: 'Бухарская область',
  },
  {
    id: 3,
    territoryId: 2,
    name: 'Ферганская область',
  },
  {
    id: 4,
    territoryId: 3,
    name: 'Джиззахская область',
  },
  {
    id: 5,
    territoryId: 2,
    name: 'Наманганская область',
  },
  {
    id: 6,
    territoryId: 3,
    name: 'Навоийская область',
  },
  {
    id: 7,
    territoryId: 4,
    name: 'Кашкадарьинская область',
  },
  {
    id: 8,
    territoryId: 4,
    name: 'Каракалпакстан',
  },
  {
    id: 9,
    territoryId: 3,
    name: 'Самаркандская область',
  },
  {
    id: 10,
    territoryId: 3,
    name: 'Сырдарьинская область',
  },
  {
    id: 11,
    territoryId: 4,
    name: 'Сурхандарьинская область',
  },
  {
    id: 12,
    territoryId: 1,
    name: 'г.Ташкент',
  },
  {
    id: 13,
    territoryId: 1,
    name: 'Ташкентская область',
  },
  {
    id: 14,
    territoryId: 4,
    name: 'Хорезмская область',
  },
  {
    id: 15,
    territoryId: 2,
    name: 'г.Коканд',
  },
  {
    id: 16,
    territoryId: 4,
    name: 'г.Денау',
  },
];

function getProvince(name) {
  return regions.find(region => region.name === name);
}

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Provinces', regions, {}),

  down: queryInterface => queryInterface.bulkDelete('Provinces', null, {}),

  getProvinceId: name => (getProvince(name) ? getProvince(name).id : null),
};
