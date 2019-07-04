const bcrypt = require('bcrypt');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Users', [{
    id: 1,
    name: 'Steve Jobs',
    username: 'ceo',
    password: bcrypt.hashSync('ceo', 10),
  },
  {
    id: 2,
    name: 'Steve Wozniack',
    username: 'manager',
    password: bcrypt.hashSync('manager', 10),
  },
  {
    id: 3,
    name: 'John Nash',
    username: 'accountant',
    password: bcrypt.hashSync('accountant', 10),
  },
  {
    id: 4,
    name: 'John Sculley',
    username: 'owner',
    password: bcrypt.hashSync('owner', 10),
  },

  {
    id: 5,
    name: 'Руслан Нусеров',
    username: 'nuserov',
    password: bcrypt.hashSync('nuserov', 10),
  },
  {
    id: 6,
    name: 'Курбан',
    username: 'kurban',
    password: bcrypt.hashSync('kurban', 10),
  },
  {
    id: 7,
    name: 'Даврон',
    username: 'davron',
    password: bcrypt.hashSync('davron', 10),
  },
  {
    id: 8,
    name: 'Рафик',
    username: 'rafik',
    password: bcrypt.hashSync('rafik', 10),
  },
  {
    id: 9,
    name: 'Дониер',
    username: 'doniyor',
    password: bcrypt.hashSync('doniyor', 10),
  },
  {
    id: 10,
    name: 'Санжар',
    username: 'sanjar',
    password: bcrypt.hashSync('sanjar', 10),
  },
  {
    id: 11,
    name: 'Рустам',
    username: 'rustam',
    password: bcrypt.hashSync('rustam', 10),
  },
  {
    id: 12,
    name: 'Ахматхужа',
    username: 'ahmatxuja',
    password: bcrypt.hashSync('ahmatxuja', 10),
  },
  {
    id: 13,
    name: 'Наиля',
    username: 'nailya',
    password: bcrypt.hashSync('nailya', 10),
  },
  {
    id: 14,
    name: 'Operator',
    username: 'operator',
    password: bcrypt.hashSync('operator', 10),
  },
  {
    id: 15,
    name: 'Алишер',
    username: 'alisher',
    password: bcrypt.hashSync('alisher', 10),
  },
  {
    id: 16,
    name: 'Нусеров Рустам',
    username: 'nuserov_rustam',
    password: bcrypt.hashSync('nuserov_rustam', 10),
  },
  {
    id: 17,
    name: 'Аракулов Д.',
    username: 'arakulov',
    password: bcrypt.hashSync('arakulov', 10),
  },
  {
    id: 18,
    name: 'Марченко А.',
    username: 'marchenko',
    password: bcrypt.hashSync('marchenko', 10),
  },
  {
    id: 19,
    name: 'Замалетдинова А.',
    username: 'zamaletdinova',
    password: bcrypt.hashSync('zamaletdinova', 10),
  },
  {
    id: 20,
    name: 'Джураев С.',
    username: 'djuraev',
    password: bcrypt.hashSync('djuraev', 10),
  },
  {
    id: 21,
    name: 'Мирзаев К.',
    username: 'mirzaev',
    password: bcrypt.hashSync('mirzaev', 10),
  },
  {
    id: 22,
    name: 'Абдуллаев Д.',
    username: 'abdullaev',
    password: bcrypt.hashSync('abdullaev', 10),
  },
  {
    id: 23,
    name: 'Алтынбеков Р.',
    username: 'altinbekov',
    password: bcrypt.hashSync('altinbekov', 10),
  },
  {
    id: 24,
    name: 'Сили Н.',
    username: 'sili',
    password: bcrypt.hashSync('sili', 10),
  },
  {
    id: 25,
    name: 'Газизов И.',
    username: 'gazizov',
    password: bcrypt.hashSync('gazizov', 10),
  },
  {
    id: 26,
    name: 'Орипов А.',
    username: 'oripov',
    password: bcrypt.hashSync('oripov', 10),
  },
  ], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
