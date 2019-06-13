module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'Provinces',
    [
      {
        id: 1,
        name: 'Андижанская область',
      },
      {
        id: 2,
        name: 'Бухарская область',
      },
      {
        id: 3,
        name: 'Ферганская область',
      },
      {
        id: 4,
        name: 'Джиззахская область',
      },
      {
        id: 5,
        name: 'Наманганская область',
      },
      {
        id: 6,
        name: 'Навоийская область',
      },
      {
        id: 7,
        name: 'Кашкадарьинская область',
      },
      {
        id: 8,
        name: 'Каракалпакстан',
      },
      {
        id: 9,
        name: 'Самаркандская область',
      },
      {
        id: 10,
        name: 'Сырдарьинская область',
      },
      {
        id: 11,
        name: 'Сурхандарьинская область',
      },
      {
        id: 12,
        name: 'г. Ташкент',
      },
      {
        id: 13,
        name: 'Ташкентская область',
      },
      {
        id: 14,
        name: 'Хорезмская область',
      },
    ],
    {},
  ),

  down: queryInterface => queryInterface.bulkDelete('Provinces', null, {}),
};
