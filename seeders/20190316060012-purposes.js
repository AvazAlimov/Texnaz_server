module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Purposes', [{
    number: 1,
    description: 'атмосферостойкие',
  },
  {
    number: 2,
    description: 'ограниченноатмосферостойкие (внутренних работ)',
  },
  {
    number: 3,
    description: 'консервационные',
  },
  {
    number: 4,
    description: 'водостойкие',
  },
  {
    number: 5,
    description: 'специальные (антиадгезионные)',
  },
  {
    number: 6,
    description: 'маслобензостойкие',
  },
  {
    number: 7,
    description: 'химстойкие',
  },
  {
    number: 8,
    description: 'термостойкие',
  },
  {
    number: 9,
    description: 'электроизоляционные',
  },
  {
    number: 0,
    description: 'грунтовки, полуфабрикатные лаки, шпатлевки',
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Purposes', null, {}),
};
